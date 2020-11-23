const feathers = require("@feathersjs/feathers");
const app = feathers();
const databaseConfig = require("./knexfile")[process.env.NODE_ENV];
const knex = require("knex");
const connection = knex(databaseConfig);
const { Model } = require("objection");

Model.knex(connection);

// Services
const PostsService = require("./src/services/Posts");

// Registration
app.use("posts", new PostsService());

app.service("posts").on("created", (post) => {
	console.log(`A post named ${post.title} was created!`)
})