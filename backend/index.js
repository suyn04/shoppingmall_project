const express = require('express');
const app = express();
const db = require('mysql2');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, 'imgs/');
        },
        filename: (req, file, cb) => {
            const ext = path.extname(file.originalname);
            let fName = path.basename(file.originalname, ext) + Date.now() + ext;
            //한글인코딩
            let newFName = Buffer.from(fName, 'latin1').toString('utf8');

            cb(null, newFName);
        },
    }),
    limits: { fileSize: 5 * 1024 * 1024 },
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/imgs', express.static(path.join(__dirname, 'imgs')));

const productRouter = require('./controller/product.js');
app.use('/product/', productRouter(upload));

const orderRouter = require('./controller/order.js');
app.use('/order/', orderRouter());

const memberListRouter = require('./controller/MemberList.js');
app.use('/admin/member/', memberListRouter());

const memberDetailRouter = require('./controller/MemberDetail.js');
app.use('/admin/member/detail', memberDetailRouter());
const basketRouter = require('./controller/Basket.js');
app.use('/basket/', basketRouter());

const adminOrderRouter = require('./controller/adminOrder.js');
app.use('/admin/order/', adminOrderRouter());

// 일대일문의
const onetooneRouter = require('./controller/one_to_one.js');
app.use('/onetoone/', onetooneRouter(upload));
//리뷰
const reviewRouter = require('./controller/review.js');
app.use('/review/', reviewRouter(upload));
//게시판
const reportRouter = require('./controller/report.js');
app.use('/reports/', reportRouter(upload));

//회원가입 라우터
const signUpRouter = require('./controller/SignUp.js');
app.use('/signUp', signUpRouter);

//로그인 라우터
const signInRouter = require('./controller/SignIn.js');
app.use('/signIn', signInRouter);

//마이페이지 라우터
const myinfoRouter = require('./controller/MyInfo.js');
app.use('/myPage/', myinfoRouter());

//회원정보 수정 라우터
const myinfoeditRouter = require('./controller/MyInfo.js');
app.use('/myPage/myinfoEdit', myinfoeditRouter());

app.get('/', (req, res) => {
    console.log('백엔드 서버 진입'); //정상작동 확인
    res.send('백엔드 서버 진입');
});

app.get('*', (req, res) => {
    res.send('404에러');
});

app.listen(5001, () => {
    console.log('서버 실행');
});
