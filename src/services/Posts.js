const Posts = require("../models/Posts");

class PostsService {

	create(data){
		return Posts.query().insert(data);
	}

}

module.exports = PostsService;