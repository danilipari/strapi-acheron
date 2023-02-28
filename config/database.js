/* module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        // client: 'sqlite',
        // filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        username: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'DL4MxCpugHyVqgtaE'),
        // ssl: env.bool('DATABASE_SSL', false),
      },
      options: {
        // useNullAsDefault: true,
        ssl: env.bool('DATABASE_SSL', false),
      },
    },
  },
}); */

module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'postgres'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'strapi'),
      username: env('DATABASE_USERNAME', 'strapi'),
      password: env('DATABASE_PASSWORD', 'DL4MxCpugHyVqgtaE'),
      schema: env('DATABASE_SCHEMA', 'public'), // Not required
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL', false),
      },
    },
    debug: false,
  },
});


// Postgres

// STRAPI
// Hostname: 10.1.3.160
// Port: 5432
// User: strapi
// Pwd: DL4MxCpugHyVqgtaE
