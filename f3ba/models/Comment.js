var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  article: { type: mongoose.Schema.ObjectId, ref: 'Article'}
}, { timestamps: true });

CommentSchema.methods.toJSONFor = (user) => {
  return {
    id: this._id,
    body: this.body,
    createdAt: this.createdAt,
    author: this.author.toProfileJSONFor(user)
  };
};

mongoose.model('Comment', CommentSchema);