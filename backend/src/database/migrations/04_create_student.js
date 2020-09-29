exports.up = function (knex) {
  return knex.schema.createTable('students', function (table) {
    table.uuid('id').primary().notNullable();;
    table.string('registration').unique().notNullable();
    table.boolean('status').notNullable().defaultTo(true);

    table
    .uuid('user_id')
    .notNullable()
    .references('id')
    .inTable('users')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    table
    .uuid('class')
    .notNullable()
    .references('id')
    .inTable('classes')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('students');
};

exports.config = { transaction: false };
