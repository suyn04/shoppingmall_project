const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const app = express();
const path = require('path'); // path 모듈 추가
const db = require('../db'); // DB 연결 모듈 임포트
const router = express.Router(); // 라우터 객체 생성
const cors = require('cors');

app.use(cors());

router.post('/', async (req, res) => {
    const { email, password } = req.body; //프론트에서 보낸 이메일과 비번 정의

    try {
        // 데이터베이스에서 사용자 정보 조회
        const [userInfo] = await db.query('SELECT * FROM auth WHERE email = ?', [email]);
        //auth테이블에서 이메일 조건이 일치하는 데이터를 가져와서 배열로 저장

        if (userInfo.length === 0) {
            // 조회된 사용자가 없을 경우
            return res.status(401).json({ message: '이메일을 확인해주세요' });
        }

        // 비밀번호 맞는지 검증
        const pwchk = await bcrypt.compare(password, userInfo[0].password);

        if (!pwchk) {
            // 비밀번호가 일치하지 않을 경우
            return res.status(401).json({ message: '비밀번호를 확인해주세요' });
        }

        // 로그인 성공 시 응답
        res.status(200).json({ message: '로그인 성공' });
    } catch (error) {
        // 서버 오류 처리
        console.error('로그인 오류 :', error);
        res.status(500).json({ message: '서버 오류가 발생' });
    }
});

module.exports = router;
