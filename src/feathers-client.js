// const io = require('socket.io-client');
// const feathers = require('@feathersjs/feathers');
// const socketio = require('@feathersjs/socketio-client');
//
// const socket = io('http://localhost:3030');
// const client = feathers();
//
// client.configure(socketio(socket));
//
// const postsService = client.service("posts");
//
// postsService.on("created", (post) => {
// 	console.log("Created Post")
// 	console.log(post)
// })
//
// postsService.create({
// 	title: "Apple"
// })

import feathers from '@feathersjs/feathers';
import socketio from "@feathersjs/socketio-client";
import io from 'socket.io-client';
import { iff, discard } from 'feathers-hooks-common';
import feathersVuex from 'feathers-vuex';

const socket = io();

const feathersClient = feathers()
	.configure(socketio(socket))
	// .hooks({
	// 	before: {
	// 		all: [
	// 			function(context){
	// 				console.log(context);
	// 				return context
	// 			},
	// 			// iff(
	// 			// 	context => ['create', 'update', 'patch'].includes(context.method),
	// 			// 	discard('__id', '__isTemp')
	// 			// )
	// 		]
	// 	}
	// })

feathersClient.service('posts')
	.on('created', message => console.log('New message created', message))

setTimeout(async function(){

	try {

		await feathersClient.service('posts').create({
			title: "AppleSauce"
		})

	} catch(err){
		console.error(err)
	}

}, 5000)

export default feathersClient;

const {
	makeServicePlugin,
	makeAuthPlugin,
	BaseModel,
	models,
	FeathersVuex
} = feathersVuex(feathersClient, {
	serverAlias: 'api',
	idField: 'id',
	whitelist: ['$regex', '$options']
})

export { makeAuthPlugin, makeServicePlugin, BaseModel, models, FeathersVuex }