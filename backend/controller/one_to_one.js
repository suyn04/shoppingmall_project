const express = require('express');
const router = express.Router();
const conn = require('../db')


module.exports = (upload) => {
    //1:1 문의 목록 조회 (get)
    router.get('/', async (req, res) => {
        console.log('1:1 문의 목록 조회 진입성공');


        try {
            const [results] = await conn.execute(`
                SELECT 
                    post_no,           -- 게시글 번호
                    post_category,     -- 카테고리
                    customer_id,       -- 작성자 ID
                    post_date,         -- 작성 날짜
                    post_title,        -- 제목
                    post_detail,       -- 문의 내용
                    reply_detail,      -- 답변 내용
                    reply_date,        -- 답변 날짜
                    reply_status       -- 답변 상태
                FROM 
                    one_to_one
            `);
             
        console.log(results); // 응답 확인: results가 배열인지 확인
        
        res.json(results); // 결과 반환
           
        } catch (err) {
            console.error('1:1 문의 목록 조회 실패:', err.message);
            res.status(500).json({ error: 'DB 에러' });
        }
    });

    router.get('/:id', async (req, res) => {
        console.log('1:1 문의 목록 조회 진입성공');


        try {
            const [results] = await conn.execute(`
                SELECT 
                    post_no,           -- 게시글 번호
                    post_category,     -- 카테고리
                    customer_id,       -- 작성자 ID
                    post_date,         -- 작성 날짜
                    post_title,        -- 제목
                    post_detail,       -- 문의 내용
                    reply_detail,      -- 답변 내용
                    reply_date,        -- 답변 날짜
                    reply_status       -- 답변 상태
                FROM 
                    one_to_one

                Where post_no = ?
            `, [req.params.id]);
             
        console.log(results); // 응답 확인: results가 배열인지 확인
        
        res.json(results[0]); // 결과 반환
           
        } catch (err) {
            console.error('1:1 문의 목록 조회 실패:', err.message);
            res.status(500).json({ error: 'DB 에러' });
        }
    });

    //1:1 문의 등록 (post)
    router.post('/', async (req, res) => {
        const { post_category, customer_id, post_title, post_detail } = req.body;

        // 필수 데이터 검증
        if (!post_category || typeof post_category !== 'string' || 
            !customer_id || !post_title || !post_detail) {
            return res.status(400).json({ error: '필수 입력 데이터가 누락되었거나 잘못되었습니다.' });
        }

        try {
         // INSERT 쿼리 작성
         const sql = `
         INSERT INTO one_to_one 
         (post_category, customer_id, post_title, post_detail, post_date, reply_status)
         VALUES (?, ?, ?, ?, NOW(), '대기')
     `;
            const [result] = await conn.execute(sql, [post_category, customer_id, post_title, post_detail]);

            console.log('1:1 문의 등록 성공:', result);
            res.status(201).json({
                post_no: result.insertId,
                post_category,
                customer_id,
                post_title,
                post_detail,
                reply_status: '대기',
            });
        } catch (err) {
            console.error('1:1 문의 등록 실패:', err.message);
            res.status(500).json({ error: 'DB 삽입 실패' });
        }
    });


    return router;
};