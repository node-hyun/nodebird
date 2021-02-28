const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const passport = require('passport');
const { User,Post } = require('../models');

// add router for  /user/****
router.patch('/:userId/follow', async (req, res, next) => { // PATCH /user/1/follow
    try {
        const user = await User.findOne({ where: { id: req.params.userId } });
        if (!user) {
            res.status(403).send('없는 사람을 팔로우하려고 하시네요?');
        }
        await user.addFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});


router.delete('/:userId/follow', async (req, res, next) => { // DELETE /user/1/follow
    try {
        const user = await User.findOne({ where: { id: req.params.userId } });
        if (!user) {
            res.status(403).send('없는 사람을 언팔로우하려고 하시네요?');
        }
        await user.removeFollowers(req.user.id);
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// 유저 정보 가져 오기 
router.get('/', async (req, res, next) => { // GET /user
    console.log("req.headers  ::", req.headers);

    try {
        if (req.user) {
            const fullUserWithoutPassword = await User.findOne({
                where: { id: req.user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            res.status(200).json(fullUserWithoutPassword);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});



// 로그아웃
router.post('/logout', (req, res, next) => {
    req.logout();
    req.session.destroy();
    res.send('ok')
})


// 로그인 라우터
router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err);
        }
        if (info) {
            console.log("message :", info.reason);
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            console.log("반환할 id ::::::::::::::::::: ", user);

            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: {
                    exclude: ['password']
                },
                include: [{
                    model: Post,
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followings',
                    attributes: ['id'],
                }, {
                    model: User,
                    as: 'Followers',
                    attributes: ['id'],
                }]
            })
            console.log("fullUserWithoutPassword : ", fullUserWithoutPassword);
            return res.status(200).json(fullUserWithoutPassword); // 성공 응답 코드와 함께 유저 정보를 응답
        });
    })(req, res, next);
});


// /user(post)
// 회원 가입 요청
router.post('/', async (req, res, next) => {
    console.log("req.body.email : ", req.body);
    console.log("req.body.nickname : ", req.body);
    console.log("req.body.password : ", req.body);

    try {
        const exUser = await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디에요')
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);


        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword
        })
        res.status(201).send('회원 가입 success but 비밀번호 암호화 ok')
    } catch (err){
        console.error(error);
        next(error);
    }
});


module.exports = router;
