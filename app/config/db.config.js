module.exports = {
  HOST: "ep-quiet-math-78680175-pooler.us-east-1.postgres.vercel-storage.com",
  USER: "default",
  PASSWORD: "fTjywm5J3oZD",
  DB: "verceldb",
  dialect: "postgres",
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};
