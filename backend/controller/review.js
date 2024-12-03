const express = require('express');
const router = express.Router();
const conn = require('../db');

module.exports = (upload) => {
    // 리뷰 목록 가져오기
    router.get('/', async (req, res) => {
        console.log('홈페이지 진입');
        try {
            const [ret] = await conn.execute("SELECT * FROM review_management");
            res.json(ret);
        } catch (err) {
            console.error("SQL 실패:", err.message);
            res.status(500).send("DB 오류");
        }
    });

    // 리뷰 저장하기
    router.post('/', async (req, res) => {
        const {
            product_id = null,
            customer_id = null,
            review_rate = null,
            review_recommend = null,
            review_nick = null,
            review_title = null,
            review_detail = null,
            review_region = null,
            review_scent = null,
            review_time = null,
            review_gift = null,
        } = req.body;

        console.log('받은 데이터:', {
            product_id,
            customer_id,
            review_rate,
            review_recommend,
            review_nick,
            review_title,
            review_detail,
            review_region,
            review_scent,
            review_time,
            review_gift,
        });

        try {
            const query = `
                INSERT INTO review_management (
                    product_id, customer_id, review_date, review_rate, review_recommend,
                    review_nick, review_title, review_detail, review_region, review_scent,
                    review_time, review_gift, review_status
                )
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            `;
            const values = [
                product_id,
                customer_id,
                new Date(), // 리뷰 작성 날짜
                review_rate,
                review_recommend,
                review_nick || '익명', // 기본값: 익명
                review_title || '제목 없음', // 기본값: 제목 없음
                review_detail || '내용 없음', // 기본값: 내용 없음
                review_region || '지역 미지정', // 기본값: 지역 미지정
                review_scent || '향 미지정', // 기본값: 향 미지정
                review_time,
                review_gift,
                1, // 기본 상태값
            ];

            console.log('삽입할 값:', values); // 디버깅용 로그
            await conn.execute(query, values);

            res.status(201).json({ message: '리뷰가 성공적으로 저장되었습니다!' });
        } catch (err) {
            console.error('SQL 삽입 실패:', err.message);
            res.status(500).send('DB 삽입 실패');
        }
    });

    // 리뷰 목록 가져오기
router.get('/', async (req, res) => {
    try {
      const [rows] = await conn.execute("SELECT * FROM review_management");
      console.log('리뷰 목록:', rows);  // 서버에서 받은 리뷰 목록 확인
      res.json(rows);
    } catch (err) {
      console.error('리뷰 목록 조회 실패:', err.message);
      res.status(500).send('DB 오류');
    }
  });
  
    // 리뷰 신고 목록 가져오기
    router.get('/reports', async (req, res) => {
        console.log('reports 진입');
        try {
            const [ret] = await conn.execute("SELECT * FROM review_reports");
            res.json(ret);
        } catch (err) {
            console.error("SQL 실패:", err.message);
            res.status(500).send("DB 오류");
        }
    });

    return router;
};
