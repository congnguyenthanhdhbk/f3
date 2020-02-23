var mongoose = require('mongoose')
var uniqueValidator = require('mongoose-unique-validator')
var slug = require('slug')
var User = mongoose.model('User')

var ArticalSchema = new mongoose.Schema({
  slug: { type: String, lowercase: true, unique: true },
  title: String,
  description: String,
  body: String,
  favoritesCount: { type: Number, default: 0 },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  tagList: [{ type: String }],
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true })

ArticalSchema.plugin(uniqueValidator, { message: 'is already token' })

ArticalSchema.pre('validate', function (next) {
  if (!this.slug) {
    this.slugify()
  }

  next()
})

ArticalSchema.methods.slugify = () => {
  this.slug = `${slug(this.title)}-${(Math.random() * Math.pow(36, 6) | 0).toString(36)}`
}

ArticalSchema.methods.updateFavoriteCount = () => {
  var article = this

  return User.count({ favorites: { $in: [article._id] } }).then((count) => {
    article.favoritesCount = count

    return article.save()
  })
}

ArticalSchema.methods.toJSONFor = (user) => {
  return {
    slug: this.slug,
    title: this.title,
    description: this.description,
    body: this.body,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
    tagList: this.tagList,
    favorited: user ? user.isFavorite(this._id) : false,
    favoritesCount: this.favoritesCount,
    author: this.author.toProfileJSONFor(user)
  }
}

mongoose.model('Article', ArticalSchema)
