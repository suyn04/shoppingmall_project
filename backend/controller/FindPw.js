const express = require('express');
const router = express.Router();
const db = require('../db');

// 비밀번호 찾기
router.post('/findPw', async (req, res) => {
    const { email, contact_number } = req.body;

    if (!email || !contact_number) {
        return res.json({ success: false, message: '이메일과 연락처를 입력해주세요.' });
    }

    try {
        // 이메일과 연락처 확인
        const [rows] = await db.query(`SELECT email FROM customers WHERE email = ? AND contact_number = ?`, [email, contact_number]);

        if (rows.length === 0) {
            return res.json({ success: false, message: '일치하는 정보를 찾을 수 없습니다. 입력하신 정보를 재확인 해주세요.' });
        }

        res.json({ success: true, message: '비밀번호 재설정이 필요합니다.' });
    } catch (err) {
        console.error('비밀번호 찾기 오류:', err);
        res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
});

// 비밀번호 재설정
router.post('/resetPw', async (req, res) => {
    const { email, newPassword } = req.body;

    if (!email || !newPassword) {
        return res.json({ success: false, message: '입력하신 정보를 재확인 해주세요.' });
    }

    try {
        // 비밀번호 업데이트
        const [result] = await db.query(`UPDATE auth SET password = ? WHERE email = ?`, [newPassword, email]);

        if (result.affectedRows === 0) {
            return res.json({ success: false, message: '해당 이메일로 가입된 정보가 없습니다.' });
        }

        res.json({ success: true, message: '비밀번호 변경이 완료되었습니다. 로그인 페이지로 이동합니다.' });
    } catch (err) {
        console.error('비밀번호 재설정 오류:', err);
        res.status(500).json({ success: false, message: '서버 오류가 발생했습니다.' });
    }
});

module.exports = router;
