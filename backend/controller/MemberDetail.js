const express = require('express');
const router = express.Router();
const conn = require('../db');

module.exports = () => {
    router.get('/:id', async (req, res) => {
        console.log('/member detail 진입 확인');
        console.log('요청된 ID:', req.params.id);

        try {
            const [rows] = await conn.execute('SELECT * FROM customers WHERE customer_id = ?', [req.params.id]);
            console.log([rows]);

            if (rows.length === 0) {
                console.log('해당 ID로 고객을 찾을 수 없습니다:', req.params.id);
                return res.status(404).json({ message: '회원 정보를 찾을 수 없습니다.' });
            }

            res.json(rows);
        } catch (err) {
            console.error('SQL 실패:', err.message);
            res.status(500).json({ message: '서버 오류가 발생했습니다.' });
        }
    });

    router.put('/member/update/:id', async (req, res) => {
        const { id } = req.params;
        const { status } = req.body; // 프론트엔드에서 전달받은 상태값

        try {
            if (status === '탈퇴') {
                // 1. 탈퇴 회원 데이터를 deleted_customer 테이블로 이동
                const [customer] = await conn.execute('SELECT * FROM customers WHERE customer_id = ?', [id]);

                if (customer.length === 0) {
                    return res.status(404).json({ message: '회원 정보를 찾을 수 없습니다.' });
                }

                const { customer_id, customer_name, email, contact_number, gender, birthdate, required_agree, optional_agree, customer_address, join_date, last_login_date } = customer[0];

                await conn.execute(
                    `INSERT INTO deleted_customer 
                 (customer_id, customer_name, email, contact_number, gender, birthdate, required_agree, optional_agree, customer_address, join_date, last_login_date, status) 
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, '탈퇴')`,
                    [customer_id, customer_name, email, contact_number, gender, birthdate, required_agree, optional_agree, customer_address, join_date, last_login_date]
                );

                // 2. 원래 customers 테이블에서 데이터 삭제
                await conn.execute('DELETE FROM customers WHERE customer_id = ?', [id]);

                res.status(200).json({ message: '회원이 탈퇴 처리되었습니다.' });
            } else {
                // "정상" 또는 "휴면" 상태 업데이트
                const [result] = await conn.execute('UPDATE customers SET status = ? WHERE customer_id = ?', [status, id]);

                if (result.affectedRows > 0) {
                    res.status(200).json({ message: '회원 상태가 업데이트되었습니다.' });
                } else {
                    res.status(404).json({ message: '회원 정보를 찾을 수 없습니다.' });
                }
            }
        } catch (err) {
            console.error('회원 상태 업데이트 오류:', err.message);
            res.status(500).json({ message: '서버 오류가 발생했습니다.' });
        }
    });

    return router;
};
