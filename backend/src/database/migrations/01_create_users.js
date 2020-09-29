exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.uuid('id').primary().notNullable();;
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('name').notNullable();
    table.string('cpf').notNullable();
    table.string('phone').notNullable();
    table.string('level').notNullable();
    table.boolean('status').notNullable().defaultTo(true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};

exports.config = { transaction: false };
