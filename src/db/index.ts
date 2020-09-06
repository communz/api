import knexC from 'knex';

export const knex = knexC({
  client: 'pg',
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PW,
    user: process.env.DB_USER,
    port: 5432,
  },
  migrations: {
    directory: './src/data/migrations',
  },
});

export const migrate = async () => {
  await knex.migrate.latest();
}

