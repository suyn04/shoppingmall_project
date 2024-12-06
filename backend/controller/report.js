const express = require('express');
const router = express.Router();
const conn = require('../db'); // DB 연결 파일 import

module.exports = () => {
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
            res.json(reports); // 데이터 반환
        } catch (error) {
            console.error('목록 오류:', error.message);
            res.status(500).json({ error: '목록 불러오기 실패' });
        }
    });

    // 특정 신고 가져오기
    router.get('/:id', async (req, res) => {
        try {
            const { id } = req.params; // URL에서 ID 가져옴
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

            res.json(report[0]); // 첫 번째 데이터 반환
        } catch (error) {
            console.error('상세 오류:', error.message);
            res.status(500).json({ error: '상세 불러오기 실패' });
        }
    });

    return router;
};

