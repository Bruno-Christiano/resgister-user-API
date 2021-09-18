require('dotenv').config();

module.exports = {
  development: {
    username: 'postgres',
    password: '8143614452',
    database: 'register-users',
    host: '127.0.0.1',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
  },
};
