const express = require('express');
const router = express.Router();
const conn = require('../db'); // DB 연결 파일 import

// 신고 목록 가져오기
router.get('/', async (req, res) => {
    try {
        const [reports] = await conn.query(`
            SELECT 
                report_no,
                review_no,
                email AS reporter,
                report_date,
                report_detail,
                check_status
            FROM review_reports
            ORDER BY report_date DESC
        `);
        res.json(reports);
    } catch (error) {
        console.error('목록 오류:', error.message);
        res.status(500).json({ error: '목록 불러오기 실패' });
    }
});

// 특정 신고 가져오기
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [report] = await conn.query(`
            SELECT 
                report_no,
                review_no,
                email AS reporter,
                report_date,
                report_detail,
                check_status
            FROM review_reports
            WHERE report_no = ?
        `, [id]);

        if (!report.length) {
            return res.status(404).json({ error: '신고를 찾을 수 없음' });
        }

        res.json(report[0]);
    } catch (error) {
        console.error('상세 오류:', error.message);
        res.status(500).json({ error: '상세 불러오기 실패' });
    }
});

// 새로운 신고 등록하기
router.post('/', async (req, res) => {
    console.log('report 진입')
    try {
        let { review_no, reason, content ,email} = req.body;  //email도 요청에서 받기 


        
        // 매개변수 타입 확인 및 변환
        review_no=parseInt(review_no,10);
        email = email || 'aram@gmail.com';
        const report_detail = `${reason}: ${content}`

        
        console.log('받은 데이터 : ', {review_no,email,report_detail});
        
        if (!review_no || !reason || !content) {
            return res.status(400).json({ error: '모든 필드를 입력해 주세요.' });
        }

        const sql = `
        INSERT INTO review_reports (review_no, email, report_detail, report_date, check_status)
        VALUES (?, ?, ?, NOW(), 0)
    `;
    const [result] = await conn.execute(sql, [review_no, email, report_detail]);

//        const [result] = await conn.execute(sql, [review_no, `${reason}: ${content}`]);

        res.status(201).json({ message: '신고가 성공적으로 접수되었습니다.', report_no: result.insertId });
    } catch (error) {
        console.error('신고 등록 오류:', error.message);
        res.status(500).json({ error: '신고 등록 실패' });
    }
});

module.exports = router;
