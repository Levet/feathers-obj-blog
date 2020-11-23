// Update with your config settings.

require("dotenv").config()

console.log(process.env.LOCAL_DB, process.env.LOCAL_DB_USER, process.env.LOCAL_DB_PASSWORD)

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: process.env.LOCAL_DB,
      user: process.env.LOCAL_DB_USER,
      password: process.env.LOCAL_DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
