
exports.up = function(knex, Promise) {
  return knex.schema.alterTable('users', (table) => {
    table.string('token').notNullable();
  })
};

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('users');
};
