const express = require('express');
const router = express.Router();
const db = require('../db');

// 고객 기본 배송지 조회
router.post('/addressList', async (req, res) => {
    const { email } = req.body;

    try {
        const [rows] = await db.query(
            `SELECT customer_name, zip, roadname_address, building_name, detail_address, contact_number
            FROM customers WHERE email = ?`,
            [email]
        );

        res.json(rows[0]);
    } catch (err) {
        console.error('배송지 조회 실패:', err.message);
        res.json({ error: 'DB 오류' });
    }
});

// 고객 기본 배송지 수정
router.post('/addressList/updateAddress', async (req, res) => {
    const { email, zip, roadname_address, building_name, detail_address } = req.body;

    if (!email || !zip || !roadname_address || !detail_address) {
        return res.json({ error: '입력한 주소를 다시 확인해주세요.' });
    }

    try {
        const [result] = await db.query(
            `UPDATE customers
            SET zip = ?, roadname_address = ?, building_name = ?, detail_address = ?
            WHERE email = ?`,
            [zip, roadname_address, building_name, detail_address, email]
        );

        res.json({ success: true, message: '배송지 정보가 업데이트되었습니다.' });
    } catch (err) {
        console.error('배송지 수정 실패:', err.message);
        res.json({ error: 'DB 오류' });
    }
});
module.exports = () => router;
