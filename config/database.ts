//Postgres database configration
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("LOCAL_DATABASE_HOST", "localhost"),
      port: env.int("LOCAL_DATABASE_PORT", 5432),
      database: env("LOCAL_DB_NAME", "sellpcmsdb"),
      user: env("LOCAL_DB_USERNAME", "postgres"),
      password: env("LOCAL_DB_PASSWORD", "newpassword"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});