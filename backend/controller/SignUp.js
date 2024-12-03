const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2/promise');
const app = express();
const path = require('path'); // path 모듈 추가
const db = require('../db'); // DB 연결 모듈 임포트
const router = express.Router(); // 라우터 객체 생성

// 고객번호 생성 함수
function generateCustomerId() {
    const year = new Date().getFullYear(); //연도 추출
    const randomNum = Math.floor(10000 + Math.random() * 90000); // 5자리 랜덤 숫자(난수번호)
    return `AA${year.toString().slice(-2)}${randomNum}`; //알파벳 형태 AA로 시작하는 고객번호 생성
}

// 회원가입 API
router.post('/', async (req, res) => {
    console.log('회원가입 요청 수신:', req.body);

    const { name, email, phone, password, gender, birthdate, requiredAgree, optionalAgree } = req.body;
    //req.body에 있는 각 요소들 이름 정의

    try {
        // 고객번호 생성
        const customerId = generateCustomerId();

        // 비밀번호 암호화
        const hashedPassword = await bcrypt.hash(password, 10); //해시화

        // `customers` 테이블에 데이터 저장
        await db.query(
            `INSERT INTO customers 
    (customer_id, customer_name, email, contact_number, gender, birthdate, required_agree, optional_agree, status) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, '정상')`, //테이블에서 정의한 column명에 맞춰
            [customerId, name, email, phone, gender, birthdate, requiredAgree, optionalAgree] //회원가입시 입력한 값 배열형태로 저장
        );

        // `auth` 테이블에 데이터 저장
        await db.query(`INSERT INTO auth (email, password) VALUES (?, ?)`, [email, hashedPassword]);
        //가입 시 입력한 이메일과 패스워드는 별도의 테이블에 저장

        res.status(201).json({ message: '회원가입 성공!' });
    } catch (error) {
        console.error('회원가입 오류:', error);
        res.status(500).json({ message: '회원가입 실패!' });
    }
});

module.exports = router;
