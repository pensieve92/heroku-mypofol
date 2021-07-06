// express 모듈 불러오기
const express = require('express');
// cors 모듈 불러오기
const cors = require('cors');
// db
const dbconfig = require('./lib/db.config');

// express 객체 생성
const app = express();

dbconfig();

app.use(cors({
    origin: true,
    credentials: true // 나중에 true로 바꿔야함..(쿠키관련)
}));

// 기본 포트를 app 객체에 설정
const port = process.env.PORT || 5000;
app.listen(port);


// 미들웨어 함수를 특정 경로에 등록
app.use('/api/data', function(req, res){
    res.json({ greeting: 'hello World' })
});

console.log(`server running at http ${port}`);