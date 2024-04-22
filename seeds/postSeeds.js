const { Post } = require('../models');

const postData = [
    {
        title: "My First Post",
        content: "This blog is a great blog with a great purpose!",
        userId: 1
    }
];

module.exports = postData;
const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;