require("dotenv").config();

const databaseConfig = require("../knexfile")[process.env.NODE_ENV];
const knex = require("knex");
const connection = knex(databaseConfig);
const { Model } = require("objection");
const path = require("path");

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const services = require('./services');

const app = express(feathers());

app.db = connection;

// Load app configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', express.static(path.join(__dirname, "../dist")));

app.configure(express.rest());
app.configure(socketio());

app.configure(services);

const port = process.env.PORT || 3030;

app.listen(port).on("listening", () => {
  console.log(`Server listening on port ${port}`)
})
