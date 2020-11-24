const Posts = require("../models/Posts");

class PostsService {

	create(data){
		return Posts.query().insert(data);
	}

	fetch(params){
		return Posts.query().select(params)
	}
}

module.exports = PostsService;