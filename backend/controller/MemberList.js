const express = require('express');
const router = express.Router();
const db = require('../db');

module.exports = () => {
    router.get('/', async (req, res) => {
        console.log(`/ 진입 확인`); // 정상작동 확인

        try {
            const [ret] = await db.query('SELECT * FROM customers');
            res.json(ret);
        } catch (err) {
            console.error('SQL 실패 : ', err.message);
            res.send('DB 오류');
        }
    });

    // 상태 변경시
    router.post('/updateStatus', async (req, res) => {
        const { emails, status } = req.body;

        try {
            const chked_customer = emails.map(() => '?').join(',');
            const query = `UPDATE customers SET status = ? WHERE email IN (${chked_customer})`;
            await db.query(query, [status, ...emails]);
            res.send('상태 변경 완료');
        } catch (err) {
            console.error('SQL 실패 : ', err.message);
            res.send('DB 오류');
        }
    });

    //상세 보기
    router.get('/detail/:id', async (req, res) => {
        console.log('/member detail 진입 확인');
        console.log('요청된 ID:', req.params.id);

        try {
            const [rows] = await db.query('SELECT * FROM customers WHERE customer_id = ?', [req.params.id]);
            console.log([rows]);

            if (rows.length === 0) {
                console.log('해당 ID로 고객을 찾을 수 없습니다:', req.params.id);
                return res.json({ message: '회원 정보를 찾을 수 없습니다.' });
            }

            res.json(rows);
        } catch (err) {
            console.error('SQL 실패:', err.message);
            res.json({ message: '서버 오류가 발생했습니다.' });
        }
    });

    //탈퇴처리
    router.post('/moveToDeleted', async (req, res) => {
        const { emails } = req.body;
        console.log('받은 고객 이메일:', emails);

        if (emails.length === 0) {
            return res.send('탈퇴처리 할 고객 정보가 없습니다.');
        }
        const placeholders = emails.map(() => '?').join(',');
        try {
            // 고객 정보 이동--탈퇴고객 DB로
            const insertQuery = `
        INSERT INTO deleted_customers (
            customer_id,
            customer_name,
            email,
            contact_number,
            gender,
            birthdate,
            required_agree,
            optional_agree,
            zip,
            roadname_address,
            building_name,
            detail_address,
            join_date,
            deleted_date,
            status
        )
        SELECT * FROM customers WHERE email IN (${placeholders});
        `;

            await db.query(insertQuery, emails);

            // 먼저 auth 테이블에서 DB 삭제
            const deleteAuth = `DELETE FROM auth WHERE email IN (${placeholders})`;
            await db.query(deleteAuth, emails);
            res.send('선택된 auth 테이블에서 삭제되었습니다.');

            // customer DB에서 해당 고객이 있는 행 전체 삭제
            const deleteCustomer = `DELETE FROM customers WHERE email IN (${placeholders})`;
            await db.query(deleteCustomer, emails);
            console.log('삭제 성공');

            res.send('선택된 고객이 탈퇴 처리되었습니다.');
        } catch (err) {
            console.error('탈퇴 처리 실패:', err.message);
            res.send('DB 오류');
        }
    });

    // 휴면 고객 조회
    router.get('/unactivemember', async (req, res) => {
        console.log(`/ 휴면고객 진입 확인`); // 정상작동 확인
        try {
            const [ret] = await db.query(`SELECT * FROM customers WHERE status = '휴면'`);
            res.json(ret);
        } catch (err) {
            console.error('SQL 실패:', err.message);
            res.send('DB 오류');
        }
    });

    // 탈퇴 고객 조회
    router.get('/deletedmember', async (req, res) => {
        console.log(`/ 탈퇴고객 진입 확인`); // 정상작동 확인
        try {
            const [ret] = await db.query(`SELECT * FROM deleted_customers`);
            res.json(ret);
        } catch (err) {
            console.error('SQL 실패:', err.message);
            res.send('DB 오류');
        }
    });

    return router;
};
