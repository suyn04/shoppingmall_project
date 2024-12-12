const express = require('express');
const router = express.Router();
const db = require('../db');

module.exports = () => {
    router.post('/admin/order', async (req, res) => {
        const { action } = req.body;
        // 요청 액션에 따라서 같은 post 엔드포인트로 작업 가능
        if (action === 'orderCount') {
            try {
                //오더 테이블에서 order_status 가 주문완료인 건들 카운트
                const [ret] = await db.query(`SELECT COUNT(*) AS count FROM orders WHERE order_status = ?`, ['주문완료']);
                if (ret[0].count === 0) {
                    return res.json('0');
                }
                console.log('신규 주문건수를 확인합니다.');
                return res.json(ret[0].count); // 숫자만 반환
            } catch (err) {
                console.error('주문 정보 조회 실패:', err.message);
                return res.json({ error: 'DB 조회 오류' });
            }
        }
    });

    return router;
};
