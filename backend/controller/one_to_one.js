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


   // 1:1 문의 삭제 (DELETE)
router.delete('/delete/:post_no', async (req, res) => {
    const { post_no } = req.params;  // URL에서 post_no를 받음
  
    try {
      const [result] = await conn.execute(
        `DELETE FROM one_to_one WHERE post_no = ?`, 
        [post_no]
      );
  
      if (result.affectedRows > 0) {
        res.status(200).json({ success: true, message: '게시글 삭제 완료' });
      } else {
        res.status(404).json({ success: false, message: '게시글을 찾을 수 없습니다.' });
      }
    } catch (err) {
      console.error('1:1 문의 삭제 실패:', err.message);
      res.status(500).json({ error: 'DB 삭제 실패' });
    }
  });
  

   // 1:1 문의 수정 (PUT)
    router.put('/update/:post_no', async (req, res) => {
    const { post_no } = req.params;
    const { post_title, post_detail, reply_detail, reply_status } = req.body;
  
    try {
      const [result] = await conn.execute(
        `UPDATE one_to_one
         SET post_title = ?, post_detail = ?, reply_detail = ?, reply_status = ?, reply_date = NOW()
         WHERE post_no = ?`,
        [post_title, post_detail, reply_detail, reply_status, post_no]
      );
  
      if (result.affectedRows > 0) {
        res.status(200).json({ success: true, message: '게시글 수정 완료' });
      } else {
        res.status(404).json({ success: false, message: '게시글을 찾을 수 없습니다.' });
      }
    } catch (err) {
      console.error('1:1 문의 수정 실패:', err.message);
      res.status(500).json({ error: 'DB 수정 실패' });
    }
  });

    
    return router;
};