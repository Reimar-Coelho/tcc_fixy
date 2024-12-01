const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    afiliado: {
        type: Schema.Types.ObjectId,  
        ref: 'Afiliado',             
        required: true
    },
    conteudo: {
        type: String,                 
        required: true
    },
    likes_count: {
        type: Number,                 
        default: 0
    },
    comments_count: {
        type: Number,                 
        default: 0
    },
    created_at: {
        type: Date,                  
        default: Date.now
    },
    comentarios: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Comments'
    }]
});

const CommentSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Posts',
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'Cliente',
        required: true
    },
    comment_text: { 
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const LikeSchema = new Schema({
    post: {
        type: Schema.Types.ObjectId,  
        ref: 'Posts',
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,   
        ref: 'Cliente',
        required: true
    },
    created_at: {
        type: Date,                    
        default: Date.now
    }
});

module.exports = mongoose.model('Likes', LikeSchema);
module.exports = mongoose.model('Comments', CommentSchema);
module.exports = mongoose.model('Posts', PostSchema);
