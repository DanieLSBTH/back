module.exports = {
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
  },
  dialectOptions: {
    ssl: {
      require: true,
      // Puedes agregar más opciones SSL aquí si es necesario
    }
  }
};
