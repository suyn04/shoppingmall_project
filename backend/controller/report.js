const express = require('express');
const router = express.Router();
const conn = require('../db');

module.exports = (upload) => {
    // 리뷰 목록 가져오기
    router.get('/', async (req, res) => {
        try {
            const [reports] = await db.query(`
                SELECT 
                    review_reports.report_no,
                    review_reports.review_no,
                    review_management.review_title,
                    review_management.review_nick AS review_author,
                    review_reports.customer_id AS reporter,
                    review_reports.report_date,
                    review_reports.report_detail,
                    review_reports.check_status
                FROM 
                    review_reports
                INNER JOIN 
                    review_management
                ON 
                    review_reports.review_no = review_management.review_no
                ORDER BY 
                    review_reports.report_date DESC
            `);
            res.status(200).json(reports); // 데이터를 JSON으로 반환
        } catch (error) {
            console.error('Failed to fetch reports:', error);
            res.status(500).json({ error: 'Failed to fetch reports' });
        }
        
    });

    return router;
};
     