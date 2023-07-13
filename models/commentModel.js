const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    body: String,
    uid: {
       type: mongoose.Schema.Types.ObjectId,
       ref: "Users"
    }
});

const Comment = mongoose.model('Comments', commentSchema);
