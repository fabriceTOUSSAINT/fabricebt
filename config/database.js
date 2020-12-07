const fs = require('fs');

module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
        schema: 'public',
        ssl: env('ENV') !== 'development' && {
          ca:  fs.readFileSync(`${__dirname}/ca-certificate.crt`).toString(),
          rejectUnauthorized: true
        }
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
