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
        console.error('신고 목록 조회 오류:', error.message);
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
        console.error('신고 상세 조회 오류:', error.message);
        res.status(500).json({ error: '상세 불러오기 실패' });
    }
});

// 새로운 신고 등록하기
router.post('/', async (req, res) => {
    console.log('report 진입');
    try {
        let { review_no, reason, content, email } = req.body;

        console.log(email)

        review_no = parseInt(review_no, 10);
        // email = email || 'aram@gmail.com'; // 
        const report_detail = `${reason}: ${content}`;

        console.log('받은 데이터:', { review_no, email, report_detail });

        if (!review_no || !reason || !content) {
            return res.status(400).json({ error: '모든 필드를 입력해 주세요.' });
        }

        const sql = `
            INSERT INTO review_reports (review_no, email, report_detail, report_date, check_status)
            VALUES (?, ?, ?, NOW(), 0)
        `;
        const [result] = await conn.execute(sql, [review_no, email, report_detail]);

        res.status(201).json({ message: '신고가 성공적으로 접수되었습니다.', report_no: result.insertId });
    } catch (error) {
        console.error('신고 등록 오류:', error.message);
        res.status(500).json({ error: '신고 등록 실패' });
    }
});

// 신고 상태 변경 엔드포인트
router.put('/:id/status', async (req, res) => {
    try {
        const { id } = req.params;
        const { check_status } = req.body;

        const sql = `UPDATE review_reports SET check_status = ? WHERE report_no = ?`;
        const [result] = await conn.execute(sql, [check_status, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: '신고를 찾을 수 없음' });
        }

        res.json({ message: '상태가 성공적으로 변경되었습니다.' });
    } catch (error) {
        console.error('상태 변경 오류:', error.message);
        res.status(500).json({ error: '상태 변경 실패' });
    }
});

// 리뷰 비공개 처리 라우터
router.put('/hide/:review_no', async (req, res) => {
    const { review_no } = req.params;

    try {
        // `review_management` 테이블에서 is_visible 값을 0으로 설정 (비공개)
        const updateReportQuery = `
        UPDATE review_reports
        SET check_status = 1, check_datetime = NOW(), check_detail = '비공개 처리됨'
        WHERE review_no = ?
    `;
    await conn.execute(updateReportQuery, [review_no]);

        if (updateResult.affectedRows === 0) {
            return res.status(404).json({ error: '해당 리뷰를 찾을 수 없습니다.' });
        }

    
        res.json({ message: '리뷰가 비공개 처리되었습니다.' });
    } catch (error) {
        console.error('리뷰 비공개 처리 오류:', error.message);
        res.status(500).json({ error: '리뷰 비공개 처리 실패' });
    }
});

module.exports = router;
