module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('Image', {
        // id가 기본적으로 들어있다.
        src: {
            type: DataTypes.STRING(200),
            allowNull: false,
        },
    }, {
        charset: 'utf8',
        collate: 'utf8_general_ci', // 이모티콘 저장
    });
    Image.associate = (db) => {
        // Image : Post 는 n: 1
        // 즉 여러개의 이미지가 동일한 포스트를 참조 가능
        // 다른말로 포스트에 소속된 이미지가 여러개일 수 있다.
        db.Image.belongsTo(db.Post);
    };
    return Image;
};
