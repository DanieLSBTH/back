module.exports = {
  URL:"postgres://default:fTjywm5J3oZD@ep-quiet-math-78680175-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb",
  PRISMA_URL:"postgres://default:fTjywm5J3oZD@ep-quiet-math-78680175-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?pgbouncer=true&connect_timeout=15",
  URL_NON_POOLING:"postgres://default:fTjywm5J3oZD@ep-quiet-math-78680175.us-east-1.postgres.vercel-storage.com:5432/verceldb",
  
  HOST: "ep-quiet-math-78680175-pooler.us-east-1.postgres.vercel-storage.com",
  USER: "default",
  PASSWORD: "fTjywm5J3oZD",
  DB: "verceldb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};


