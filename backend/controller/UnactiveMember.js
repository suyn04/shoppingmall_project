const express = require('express');
const router = express.Router();
const conn = require('../db');

module.exports = () => {
    router.get('/', async (req, res) => {
        console.log(`/ 진입 확인`); // 정상작동 확인

        try {
            const [ret] = await conn.execute(`SELECT * FROM customers WHERE status = '휴면'`);
            res.json(ret);
        } catch (err) {
            console.error('SQL 실패 : ', err.message);
            res.status(500).send('DB 오류');
        }
    });

    // 상태 변경시
    router.post('/unactivemember', async (req, res) => {
        const { customer_ids, status } = req.body;

        try {
            const chked_customer = customer_ids.map(() => '?').join(',');
            const query = `UPDATE customers SET status = ? WHERE customer_id IN (${chked_customer})`;
            await conn.execute(query, [status, ...customer_ids]);
            res.status(200).send('정상상태 변경 완료');
        } catch (err) {
            console.error('SQL 실패 : ', err.message);
            res.status(500).send('DB 오류');
        }
    });

    return router;
};
