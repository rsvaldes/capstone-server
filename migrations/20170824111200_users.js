exports.up = (knex, Promise) => {
	return knex.schema.createTable('users', (table) => {
		table.increments('id').primary();
		table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').notNullable();
		table.boolean('has_dog').notNullable();
	});
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
