module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define('Hashtag', {
        // id가 기본적으로 들어있다.
        name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4',
        collate: 'utf8mb4_general_ci', // 이모티콘 저장
    });
    Hashtag.associate = (db) => {
        // Hashtag:Post n:m
        // Hashtag 모델과 Post 테이블은 서로 다대다 관계이며 'PostHashtag'라는 중간 테이블에 참조 관계가 저장 된다.
        db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
    };
    return Hashtag;
};
