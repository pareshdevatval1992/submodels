const mongoose = require('mongoose');
  
const permissionsObject = {
    public: "public",
    private: "private",
    protected: "protected"
}

const postSchema = new mongoose.Schema({
    title: String,
    description: String,
    description2:String,
    
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
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', postSchema);



// comments [id,id2]
// permissions - public/private