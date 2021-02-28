const express = require('express');
const app = express();
const db = require('./models');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// 쿠키 파서 임포트
const cookieParser = require('cookie-parser');
// 세션 임포트
const session = require('express-session');
const passport = require('passport');
const passportConfig = require('./passport');

const postRouter = require('./routes/post');
const userRouter = require('./routes/user');
const postsRouter = require('./routes/posts');

dotenv.config();
// passport index.js 에 설정한것을 익스프레스에 적용
passportConfig();

db.sequelize.sync()
    .then(() => {
        console.log("db 연결 성공");
    })
    .catch("error ::::: ", console.error)

app.use(cors({
    origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
    credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 쿠키 설정 등록
app.use(cookieParser(process.env.COOKIE_SECRET));
// 세션 설정 등록
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req, res) => {
    res.send("hello express");
});

// 파일 업로드 폴더 설정
app.use('/', express.static(path.join(__dirname, 'uploads')));

// 라우터 로직 분기
app.use('/post', postRouter);
app.use('/posts', postsRouter);
app.use('/user', userRouter);

app.listen(3065, () => {
    console.log("Ecpress Server is Excuting");
});

