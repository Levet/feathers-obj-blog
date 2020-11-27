const service = require("feathers-knex");

module.exports = (app) => {

  app.use("/posts", service({
    Model: app.db,
    name: "posts",
  }))
}
