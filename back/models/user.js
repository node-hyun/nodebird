module.exports = (sequelize, DataTypes) => {
    // 아래처럼 User 객체를 생성하면 실제 디비상에서 유저 테이블로 매핑되며 email, nickname, password 필드가 자동 생성
    const User = sequelize.define('User', {
        // id는 테이블이 생성될때 기본적으로 설정되므로 코드로 필드 설정을 할필요 없다
        email: {
            type: DataTypes.STRING(30), // STRING, TEXT, BOOLEAN, INTEGER, FLOAT, DATETIME 등의 필드 타입이 존재
            allowNull: false, // 필수
            unique: true, // 고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, // 필수
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, // 필수
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 한글 저장
    });

    User.associate = (db) => {
        // User: Post => 1: n => db.User.hasMany(db.Post);
        db.User.hasMany(db.Post);
        // User: Comment => 1: n => db.User.hasMany(db.Comment);
        db.User.hasMany(db.Comment);
        // User: Post => m:n(through: 'Like') => User 가 좋아요 누른 게시글들  as Liked
        db.User.belongsToMany(db.Post, { through: 'Like', as: 'Liked' })

        // User : User => self(through: 'Follow') => user가 팔로우 하는 사람 as: 'Followers' user를 팔로잉 하는 사람 as: 'Followings'
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followers', foreignKey: 'FollowingId' });
        db.User.belongsToMany(db.User, { through: 'Follow', as: 'Followings', foreignKey: 'FollowerId' });
    };

    return User;

};

