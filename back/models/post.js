module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        // id가 기본적으로 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        // RetweetId
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Post.associate = (db) => {
        // Post : User 는 n : 1 so Post belongsTo User => post.setUser, post.getUser 이런식의 문법이 활성화 된다.
        db.Post.belongsTo(db.User);
        // Post : HashTag 는  m : n m:n이란? 하나의 포스트가 여러개의 태그를 참조 하나의 태그를 여러개의 포스트가 참조 둘다 가능
        // { through : '테이블 이름' } 다대다 관계의 릴레이션 정보를 나타내는 중간 테이블을 설정하는것 
        db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' }); 
        // Post : Comment 는 1:n 즉 하나의 포스트가 여러개의 댓글을 참조 가능 여러개의 댓글이 하나의 포스트를 참조 가능
        // 그럴 경우 hasMany
        db.Post.hasMany(db.Comment);
        // Comment 와 동일
        db.Post.hasMany(db.Image);
        // 하나의 Post 가 여러개의 User를 참조 가능
        // 하나의 User 가 여러개의 Post를 참조 가능
        // Post.User는 게시글 작성자를 말하므로 테이블 닉네임으로 Likers를 설정 => post.Liker는 게시글을 좋아하는 사람들이 됨
        db.Post.belongsToMany(db.User, { through: 'Like', as: 'Likers' })
        // 리트윗한 포스팅은 스스로를 참조한다. 셀프 참조로서 as를 설정하면 별개의 필드가 생성되어 참조 정보를 나타낸다.
        db.Post.belongsTo(db.Post, { as: 'Retweet' });
    };
    return Post;
};
