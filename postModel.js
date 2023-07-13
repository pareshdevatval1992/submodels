const mongoose = require('mongoose');

const permissionsObject = {
    public: "public",
    private: "private"
}

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    uid: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Users"
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    }],
    permissions: {
        type: String,
        default: permissionsObject.public
    },
    comments: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: "Comments"
    }]
});

module.exports = mongoose.model('Posts', postSchema);



// comments [id,id2]
// permissions - public/private