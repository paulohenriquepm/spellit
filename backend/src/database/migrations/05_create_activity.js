exports.up = function (knex) {
  return knex.schema.createTable('activities', function (table) {
    table.uuid('id').primary().notNullable();;
    table.string('name').notNullable();
    table.date('delivery_date').notNullable();
    table.float('points').notNullable();
    table.string('obs');
    table.string('file').notNullable();
    table.boolean('status').notNullable().defaultTo(true);

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
  return knex.schema.dropTable('activities');
};

exports.config = { transaction: false };
