exports.up = function (knex) {
  return knex.schema.createTable('addresses', function (table) {
    table.uuid('id').primary().notNullable();;
    table.string('street').notNullable();
    table.string('number').notNullable();
    table.string('neighborhood').notNullable();
    table.string('city').notNullable();
    table.string('state').notNullable();
    table.string('zipcode').notNullable();
    table.boolean('status').notNullable().defaultTo(true);

    table
      .uuid('owner_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('addresses');
};

exports.config = { transaction: false };
