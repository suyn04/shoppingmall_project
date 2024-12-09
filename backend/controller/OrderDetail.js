//주문 상세보기 백엔드
const express = require('express');
const router = express.Router();
const db = require('../db');

module.exports = () => {
    router.get('/:id', async (req, res) => {
        console.log('/order detail 진입 확인');
        console.log('요청된 ID:', req.params.id);

        try {
            const [rows] = await db.query('SELECT * FROM orders WHERE order_id = ?', [req.params.id]);
            console.log([rows]);

            if (rows.length === 0) {
                console.log('해당 주문번호가 없습니다 :', req.params.id);
                return res.json({ message: '회원 정보를 찾을 수 없습니다.' });
            }

            res.json(rows);
        } catch (err) {
            console.error('SQL 실패:', err.message);
            res.json({ message: '서버 오류가 발생했습니다.' });
        }
    });

    return router;
};
