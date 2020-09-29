exports.up = function (knex) {
  return knex.schema.createTable('student_activities', function (table) {
    table.uuid('id').primary().notNullable();
    table.date('delivered_date').notNullable();
    table.float('note');
    table.string('file').notNullable();
    table.boolean('status').notNullable().defaultTo(true);

    table
    .uuid('student')
    .notNullable()
    .references('id')
    .inTable('students')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');

    table
    .uuid('activity')
    .notNullable()
    .references('id')
    .inTable('activities')
    .onUpdate('CASCADE')
    .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('student_activities');
};

exports.config = { transaction: false };
