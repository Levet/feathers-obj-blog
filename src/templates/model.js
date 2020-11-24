const { Model } = require("objection");

class MODELNAME extends Model {
	static get tableName(){
		return "modelname";
	}
	static get idColumn(){
		return "id"
	}

	static get jsonSchema(){
		return {}
	}

	$beforeInsert(context){
		this.created_at = new Date();
	}

	$beforeUpdate(context){
		this.modified_at = new Date();
	}
}

module.exports = MODELNAME;
