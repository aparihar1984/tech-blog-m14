const { Comment } = require('../models');

const commentData = [
    {
        userId: 1,
        postId: 1,
        comment: "Great post and very informative!"
    }
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;