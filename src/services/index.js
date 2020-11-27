const posts = require("./posts/posts.service");

module.exports = (app) => {
  app.configure(posts)
}
