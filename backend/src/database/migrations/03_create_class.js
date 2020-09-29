exports.up = function (knex) {
  return knex.schema.createTable('classes', function (table) {
    table.uuid('id').primary().notNullable();;
    table.string('name').notNullable();
    table.integer('course').notNullable();
    table.date('start_date').notNullable();
    table.date('end_date').notNullable();
    table.string('workload').notNullable();
    table.string('limit').notNullable();
    table.boolean('status').notNullable().defaultTo(true);

    table
      .uuid('teacher')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('classes');
};

exports.config = { transaction: false };
