const express = require('express');
const router = express.Router();
const db = require('../db');

module.exports = () => {
    // 고객 정보 조회 라우트
    router.post('/', async (req, res) => {
        const { email } = req.body; // 바디에서 이메일 가져와서
        const sessionToken = req.headers['authorization']; // 세션 토큰 확인

        // 세션 토큰 검증
        if (!sessionToken || sessionToken !== 'mockSessionToken') {
            // 세션토큰이 없거나 저장된 세션토큰과 일치 하지 않으면
            return res.json({ error: '세션 토큰이 유효하지 않습니다.' });
        }

        try {
            // 이메일로 customer DB 조회
            const [ret] = await db.query(`SELECT * FROM customers WHERE email = ?`, [email]);
            if (ret.length === 0) {
                // 조회된 결과가 없으면
                return res.json({ error: '고객 정보를 찾을 수 없습니다.' });
            }

            // 조회된 결과가 있다면
            if (ret[0].birthdate) {
                ret[0].birthdate = ret[0].birthdate.toISOString().split('T')[0];
            }
            console.log('응답 데이터:', ret[0]);
            res.json(ret[0]); // 첫 번째 결과 반환
        } catch (err) {
            console.error('DB 조회 실패:', err.message);
            res.send('서버 오류');
        }
    });

    return router;
};
