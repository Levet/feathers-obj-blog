
exports.up = function(knex) {
	return knex.schema.createTable("posts", (table) => {
		table.increments("id");
		table.string("title", 255).notNullable();
		table.text("body");
		table.date("created_at").notNullable();
		table.date("modified_at")
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable("posts")
};
