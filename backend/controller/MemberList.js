const express = require('express');
const router = express.Router();
const conn = require('../db');

module.exports = () => {
    router.get('/', async (req, res) => {
        console.log(`/ 진입 확인`); // 정상작동 확인

        try {
            const [ret] = await conn.execute('SELECT * FROM customers');
            res.json(ret);
        } catch (err) {
            console.error('SQL 실패 : ', err.message);
            res.status(500).send('DB 오류');
        }
    });

    // 상태 변경시
    router.post('/updateStatus', async (req, res) => {
        const { customer_ids, status } = req.body;

        try {
            const chked_customer = customer_ids.map(() => '?').join(',');
            const query = `UPDATE customers SET status = ? WHERE customer_id IN (${chked_customer})`;
            await conn.execute(query, [status, ...customer_ids]);
            res.status(200).send('휴면상태 변경 완료');
        } catch (err) {
            console.error('SQL 실패 : ', err.message);
            res.status(500).send('DB 오류');
        }
    });

    // 탈퇴 처리
    router.post('/moveToDeleted', async (req, res) => {
        const { customer_ids } = req.body;

        if (!Array.isArray(customer_ids)) {
            return res.status(400).send('잘못된 요청 형식입니다.');
        }

        try {
            const placeholders = customer_ids.map(() => '?').join(',');

            // 선택된 고객 데이터 가져오기
            const [customers] = await conn.execute(`SELECT * FROM customers WHERE customer_id IN (${placeholders})`, customer_ids);

            // `deleted_customers` 테이블로 데이터 이동
            const insertQuery = `
                INSERT INTO deleted_customers (customer_id, customer_name, contact_number, email, join_date, last_login_date, status)
                VALUES (?, ?, ?, ?, ?, ?, ?)`;
            for (const customer of customers) {
                await conn.execute(insertQuery, [customer.customer_id, customer.customer_name, customer.contact_number, customer.email, customer.join_date, customer.last_login_date, '탈퇴']);
            }

            // `customers` 테이블에서 데이터 삭제
            await conn.execute(`DELETE FROM customers WHERE customer_id IN (${placeholders})`, customer_ids);

            res.status(200).send('선택된 고객이 탈퇴 처리되었습니다.');
        } catch (err) {
            console.error('탈퇴 처리 실패: ', err.message);
            res.status(500).send('DB 오류');
        }
    });

    return router;
};
