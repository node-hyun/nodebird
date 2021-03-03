const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const { User, Post, Image, Comment, Hashtag } = require('../models');


// upload 폴더 설정 
try {
    fs.accessSync('uploads');
} catch (error) {
    console.log('uploads 폴더가 없으므로 생성합니다.');
    fs.mkdirSync('uploads');
}

// 뮬터 설정 (업로드 폴더, 파일 형식)
const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) { // 제로초.png
            const ext = path.extname(file.originalname); // 확장자 추출(.png)
            const basename = path.basename(file.originalname, ext); // 제로초
            done(null, basename + '_' + new Date().getTime() + ext); // 제로초15184712891.png
        },
    }),
    limits: { fileSize: 20 * 1024 * 1024 }, // 20MB
});


// make your router 1122
router.get('/:id', async (req, res, next) => { // GET /user/3
  try {
    const fullUserWithoutPassword = await User.findOne({
      where: { id: req.params.id },
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
    if (fullUserWithoutPassword) {
      const data = fullUserWithoutPassword.toJSON();
      data.Posts = data.Posts.length;
      data.Followings = data.Followings.length;
      data.Followers = data.Followers.length;
      res.status(200).json(data);
    } else {
      res.status(404).json('존재하지 않는 사용자입니다.');
    }
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post('/:postId/retweet', async (req, res, next) => { // POST /post/1/retweet
    try {
        // 리트윗 대상의 id로 검색하여 (리트윗한 포스팅까지 모두 합쳐 모든 포스팅 정보에 대해)
        // 포스팅이 존재하지 않을 경우 => 없는 글이므로 메세지 응답
        // 포스팅이 존재하는데 그글의 user 가 나일 경우 => 내글은 리트윗 대상일수 없다 라고 응답
        const post = await Post.findOne({
            where: { id: req.params.postId },
            include: [{
                model: Post,
                as: 'Retweet',
            }],
        });
        if (!post) {
            return res.status(403).json({ rt_error: '없는 글입니다', retweetId: post.id });
        }
        if (req.user.id === post.UserId || (post.Retweet && post.Retweet.UserId === req.user.id)) {
            return res.status(403).json({ rt_error: '자신의 글은 리트윗할 수 없습니다.', retweetId: post.id });
        }

        // 리트윗할 대상 글이 존재하며 내글이 아닐 경우
        // 리트윗 대상 글의 id를 이용해 리트윗 정보를 생성하면 되는데 그전에
        // 내가 이미 그글을 리트윗 했는지 조회하여 있을 경우 이미 리트윗 했다고 응답
        const retweetTargetId = post.RetweetId || post.id;
        const exPost = await Post.findOne({
            where: {
                UserId: req.user.id,
                RetweetId: retweetTargetId,
            },
        });

        if (exPost) {
            return res.status(403).send('이미 리트윗했습니다.');
        }

        // 리트윗 대상 글이 존재하며 그글을 쓴 사람이 내가 아니고 내가 그글을 리트윗한적도 없다면
        // 다음과 같이 리트윗 정보를 생성
        const retweet = await Post.create({
            UserId: req.user.id,
            RetweetId: retweetTargetId,
            content: 'retweet',
        });

        // 포스팅 정보를 다시 응답하되 리트윗 정보까지 응답 
        const retweetWithPrevPost = await Post.findOne({
            where: { id: retweet.id },
            include: [{
                model: Post,
                as: 'Retweet',
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: Image,
                }]
            }, {
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }, {
                model: User, // 좋아요 누른 사람
                as: 'Likers',
                attributes: ['id'],
            }],
        })
        res.status(201).json(retweetWithPrevPost);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// /1/like 
router.patch('/:postId/like', async (req, res, next) => { // PATCH /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.addLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

router.delete('/:postId/like', async (req, res, next) => { // DELETE /post/1/like
    try {
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) {
            return res.status(403).send('게시글이 존재하지 않습니다.');
        }
        await post.removeLikers(req.user.id);
        res.json({ PostId: post.id, UserId: req.user.id });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// /post/delete/comment/:PostId/:commentId
router.delete('/comment/:PostId/:CommentId', async (req, res, next) => { // DELETE /post/10
    try {
        await Comment.destroy({
            where: {
                id: req.params.CommentId,
                UserId: req.user.id,
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.PostId, 10), CommentId: parseInt(req.params.CommentId, 10)});
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// /post/1/comment
router.post('/:postId/comment', async (req, res, next) => { // POST /post/1/comment
    console.log("댓글 입력 요청 확인 at router for insert comment");
    try {
        const post = await Post.findOne({
            where: { id: req.params.postId },
        });
        if (!post) {
            return res.status(403).send('존재하지 않는 게시글입니다.');
        }
        const comment = await Comment.create({
            content: req.body.content,
            PostId: parseInt(req.params.postId, 10),
            UserId: req.user.id,
        })
        const fullComment = await Comment.findOne({
            where: { id: comment.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }],
        })
        res.status(201).json(fullComment);
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// 포스팅 삭제, 게시글 삭제
router.delete('/:postId', async (req, res, next) => { // DELETE /post/10
    try {
        await Post.destroy({
            where: {
                id: req.params.postId,
                UserId: req.user.id,
            },
        });
        res.status(200).json({ PostId: parseInt(req.params.postId, 10) });
    } catch (error) {
        console.error(error);
        next(error);
    }
});

// 포스팅 하기
// POST /post
router.post('/', upload.none(), async (req, res, next) => {
 

    try {
        // 해쉬 태그 정보 배열로 추출 하기
        const hashtags = req.body.content.match(/#[^\s#]+/g);

        // posting 데이터 입력 하기
        const post = await Post.create({
            content: req.body.content,
            UserId: req.user.id,
        });

        // 해쉬 태그 정보 입력 하기 + Post 모델에 대한 릴레이션 관계 설정 하기
        if (hashtags) {
            const result = await Promise.all(hashtags.map((tag) => Hashtag.findOrCreate({
                // slice 는 1번째부터 자른다는 이야기 #공룡 => 공룡
                where: { name: tag.slice(1).toLowerCase() },
            })));
            // result가  [[노드, true], [리액트, true]] 이므로 아래와 같이 연관 관계 설정 하기 
            await post.addHashtags(result.map((v) => v[0]));
        }

        // 이미지가 잇을 경우
        if (req.body.image) {
            // 이미지가 여러개일 경우 배열 형식이 됨 ex) image: [제로초.png, 부기초.png]
            if (Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((image) => Image.create({ src: image })));
                // 이미지 여러개 저장후 참조 데이터가 배열일 경우 한방에 릴레이션 관계 설정 가능
                await post.addImages(images);
                // 이미지가 하나일 경우 
            } else {
                const image = await Image.create({ src: req.body.image });
                // 이미지 하나일 경우도 한방에 연관 관계 설정 가능
                await post.addImages(image);
            }
        }

        // fullPost: posting한 게시글에 대한 모든 정보 가져 오기  
        // 게시글 정보 ,게시글 작성자 ,좋아요, 관련 이미지 정보, 관련 댓글 정보, 댓글 작성자 정보 
        const fullPost = await Post.findOne({
            where: { id: post.id },
            include: [{
                model: User,
                attributes: ['id', 'nickname'],
            }, {
                model: User,
                as: 'Likers',
                attributes: ['id'],
            }, {
                model: Image,
            }, {
                model: Comment,
                include: [{
                    model: User,
                    attributes: ['id', 'nickname'],
                }],
            }]
        })
        // posting한 게시글 정보 응답
        res.status(201).json(fullPost);

    } catch (error) {
        console.error(error);
        next(error);
    }

});


// 이미지 업로드뒤 배열로 응답 
router.post('/images', upload.array('image'), (req, res, next) => { // POST /post/images
    console.log(req.files);
    res.json(req.files.map((v) => v.filename));
});


// router.get('/', (req, res) => {
//     res.send("/post/ test");
// });
router.get('/:id/posts', async (req, res, next) => { // GET /user/1/posts
    try {
        const user = await User.findOne({ where: { id: req.params.id } });
        if (user) {
            const where = {};
            if (parseInt(req.query.lastId, 10)) { // 초기 로딩이 아닐 때
                where.id = { [Op.lt]: parseInt(req.query.lastId, 10) }
            } // 21 20 19 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
            const posts = await user.getPosts({
                where,
                limit: 10,
                include: [{
                    model: Image,
                }, {
                    model: Comment,
                    include: [{
                        model: User,
                        attributes: ['id', 'nickname'],
                    }]
                }, {
                    model: User,
                    attributes: ['id', 'nickname'],
                }, {
                    model: User,
                    through: 'Like',
                    as: 'Likers',
                    attributes: ['id'],
                }, {
                    model: Post,
                    as: 'Retweet',
                    include: [{
                        model: User,
                        attributes: ['id', 'nickname'],
                    }, {
                        model: Image,
                    }]
                }],
            });
            console.log(posts);
            res.status(200).json(posts);
        } else {
            res.status(404).send('존재하지 않는 사용자입니다.');
        }
    } catch (error) {
        console.error(error);
        next(error);
    }
});

module.exports = router;
