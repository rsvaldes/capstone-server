exports.up = (knex, Promise) => {
	return knex.schema.createTable('breeds', (table) => {
		table.increments('id').primary();
		table.string('name').notNullable();
    table.string('picture',1000).notNullable();
    table.string('description',2000).notNullable();
    table.string('lifespan').notNullable();
    table.string('size').notNullable();
	});
};

  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('breeds');
  };
