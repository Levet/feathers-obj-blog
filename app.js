require("dotenv").config();

const databaseConfig = require("./knexfile")[process.env.NODE_ENV];
const knex = require("knex");
const connection = knex(databaseConfig);
const { Model } = require("objection");
const path = require("path");

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

// Create an app that is a Feathers AND Express application
const app = express(feathers());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// Host static files from the current folder
app.use(express.static(path.join(__dirname, "./dist")));
// Add REST API support
app.configure(express.rest());
// Configure Socket.io real-time APIs
app.configure(socketio());

Model.knex(connection);

// Services
const PostsService = require("./src/services/Posts");
const PagesService = require("./src/services/Pages")

// Registration
app.use("posts", new PostsService());
app.use("pages", new PagesService())

app.service("posts").on("created", (post) => {
	console.log(`A post named ${post.title} was created!`)
})

app.on('connection', connection => {
	app.channel('everybody').join(connection)
});

app.on("find", (data) => {
	console.log(data)
})

app.publish(data => {
	console.log("Echoing ", data)
	app.channel('everybody')
});

const port = process.env.PORT || 3030;

app.listen(port).on("listening", () => {
	console.log(`Server listening on port ${port}`)
})