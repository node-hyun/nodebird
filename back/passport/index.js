const { User } = require('../models');
const passport = require('passport');
const local = require('./local');


module.exports = () => {
    passport.serializeUser((user, done) => {
        console.log("serializerUser 실행 확인 : ");
        console.log("user.id : ", user.id);
        done(null, user.id); // 로그인 성공시 user.id 를 세션 메모리에 저장 해라 
    });
    passport.deserializeUser(async (id, done) => {
        console.log("deserializerUser 실행 확인");
        try {
            const user = await User.findOne({ where: { id } }); // 로그인 여부 확인이 필요할때 유저 id로 유저 찾은뒤 유저 정보 반환
            done(null, user);
        } catch (error) {
            console.error("error :::::::::::::::::::::::::::::: ", error);
            done(error);
        }
    });
    local();
}
