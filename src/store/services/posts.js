import feathersClient, { makeServicePlugin, BaseModel } from "../../feathers-client";

class Posts extends BaseModel {
	constructor(data, options){
		super(data, options)
	}

	static modelName = "Posts";

	static instanceDefault(){
		return {
			title: "",
			body: ""
		}
	}
}

const servicePath = "posts";
const servicePlugin = makeServicePlugin({
	Model: Posts,
	service: feathersClient.service(servicePath),
	servicePath
});

async function echo(context){
	console.log(context);
	return context
}

feathersClient.service(servicePath).hooks({
	before: {
		create: [],
		get: []
	},
	after: {
		create: [ echo ],
		get: []
	},
	error: {
		create: [],
		get: []
	}
})

export default servicePlugin;