const { Model } = require("objection");

class Posts extends Model {
	static get tableName(){
		return "posts";
	}
	static get idColumn(){
		return "id"
	}

	static get jsonSchema(){
		return {
			"type": "object",
			"required": ["title"],

			"properties": {
				"id": { "type": "integer" },
				"title": { "type": "string", "minLength": 3, "maxLength": 255 },
				"body": { "type": "string" },
				"created_at": { "type": "date" },
				"modified_at": { "type": "date" },
			}
		}
	}

	$beforeInsert(context){
		this.created_at = new Date();
	}

	$beforeUpdate(context){
		this.modified_at = new Date();
	}
}

module.exports = Posts;