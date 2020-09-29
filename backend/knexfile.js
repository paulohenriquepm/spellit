const path = require('path');

module.exports = {
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'spellit',
    database: 'spellit',
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
  },
  useNullAsDefault: true,
};
