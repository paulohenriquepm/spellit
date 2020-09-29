import knex from 'knex';

const db = knex({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'spellit',
    database: 'spellit',
  },
  useNullAsDefault: true,
});

export default db;
