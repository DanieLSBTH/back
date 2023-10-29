module.exports = {
  HOST: "dpg-ckrfeqm2eoec73ffjql0-a.oregon-postgres.render.com",
  USER: "umg_antigua_user",
  PASSWORD: "U6mQANExZDR0XSp5fsB5LG7m14Ldz2o6",
  DB: "umg_antigua",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,
    },
  },
  define: {
    timestamps: false,
  },
};
