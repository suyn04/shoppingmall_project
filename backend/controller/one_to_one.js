const express = require('express');
const router = express.Router();
const conn = require('../db');
const multer = require('multer');
const path = require('path');
const { log, error } = require('console');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'imgs/onetoone/'); //업로드된 파일이 저장될 폴더
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage });

module.exports = () => {
    //1:1 문의 목록 조회 (get)
    router.get('/', async (req, res) => {
        // console.log('1:1 문의 목록 조회 진입성공');

        try {
            const [results] = await conn.execute(`
                SELECT 
                    post_no,           -- 게시글 번호
                    post_category,     -- 카테고리
                    email,             -- 작성자 이메일(id)
                    post_date,         -- 작성 날짜
                    post_title,        -- 제목
                    post_detail,       -- 문의 내용
                    reply_detail,      -- 답변 내용
                    reply_date,        -- 답변 날짜
                    reply_status,       -- 답변 상태
                    one_upload_file    -- 파일 첨부
                FROM 
                    one_to_one
            `);

            // console.log(results); // 응답 확인: results가 배열인지 확인

            res.json(results); // 결과 반환
        } catch (err) {
            console.error('1:1 문의 목록 조회 실패:', err.message);
            res.status(500).json({ error: 'DB 에러' });
        }
    });

    router.get('/:id', async (req, res) => {
        // console.log('1:1 문의 목록 조회 진입성공');

        try {
            const [results] = await conn.execute(
                `
                SELECT 
                    post_no,           -- 게시글 번호
                    post_category,     -- 카테고리
                    email,             -- 작성자 이메일
                    post_date,         -- 작성 날짜
                    post_title,        -- 제목
                    post_detail,       -- 문의 내용
                    reply_detail,      -- 답변 내용
                    reply_date,        -- 답변 날짜
                    reply_status,       -- 답변 상태
                    one_upload_file    -- 파일 첨부
                FROM 
                    one_to_one

                Where post_no = ?
            `,
                [req.params.id]
            );

            // console.log(results); // 응답 확인: results가 배열인지 확인

            res.json(results[0]); // 결과 반환
        } catch (err) {
            console.error('1:1 문의 목록 조회 실패:', err.message);
            res.status(500).json({ error: 'DB 에러' });
        }
    });
    // const one_upload_file = (req.file ? req.file.filename : null); //업로드된 파일명
    //1:1 문의 등록 (post) 체체체체인지부분
    router.post('/', upload.single('one_upload_file'), async (req, res) => {
        const { post_category, email, post_title, post_detail } = req.body;
        const one_upload_file = req.file ? req.file.filename : null; //업로드된 파일명 (있다면~)

        //필수 데이터 검증(email은 null 허용)
        if (!post_category || typeof post_category !== 'string' || !post_title || !post_detail) {
            return res.status(400).json({
                error: '필수 입력 데이터가 누락되었거나 잘못되었습니다.',
            });
        }
        try {
            //insert 쿼리 작성(email이 null 인경우를 고려)
            const sql = `
        INSERT INTO one_to_one 
        (post_category, email, post_title, post_detail, post_date, reply_status, one_upload_file)
        VALUES (?, ?, ?, ?, NOW(), '대기', ?)
    `;
            const [result] = await conn.execute(sql, [post_category, email || null, post_title, post_detail, one_upload_file]);

            // console.log('1:1 문의 등록 성공:', result);
            res.status(201).json({
                post_no: result.insertId,
                post_category,
                email: email || null,
                post_title,
                post_detail,
                reply_status: '대기',
                one_upload_file, // 업로드된 파일명도 응답에 포함
            });
        } catch (err) {
            console.error('1:1 문의 등록 실패:', err.message);
            res.status(500).json({ error: 'DB 삽입 실패' });
        }
    });

    // 고객 정보 조회 라우트
    router.post('/myPage', async (req, res) => {
        const { email } = req.body; // 바디에서 이메일 가져와서
        const sessionToken = req.headers['authorization']; // 세션 토큰 확인

        // 세션 토큰 검증
        if (!sessionToken || sessionToken !== 'mockSessionToken') {
            // 세션토큰이 없거나 저장된 세션토큰과 일치 하지 않으면
            return res.status(401).json({ error: '세션 토큰이 유효하지 않습니다.' });
        }

        try {
            // 이메일로 customer DB 조회
            const [ret] = await db.query(`SELECT * FROM customers WHERE email = ?`, [email]);
            if (ret.length === 0) {
                // 조회된 결과가 없으면
                return res.status(404).json({ error: '고객 정보를 찾을 수 없습니다.' });
            }

            // 조회된 결과가 있다면
            res.json(ret[0]); // 첫 번째 결과 반환
        } catch (err) {
            console.error('DB 조회 실패:', err.message);
            res.status(500).send('서버 오류');
        }
    });

    router.put('/:id', async (req, res) => {
        console.log('1:1 문의 목록 수정 진입성공');

        let data = [req.body.reply_status, parseInt(req.body.post_no)];
        console.log(data);

        try {
            const [ret] = await conn.execute('update one_to_one set reply_status=? where post_no = ?', data);
            console.log('수정완료', ret);
            res.send('수정 성공');
        } catch (err) {
            console.error('db 불러오기 실패 : ', err.message);
            res.status(500).send('db오류');
        }
    });

    return router;
};
