module.exports = {
  HOST: "dpg-ckv9igramefc73duvpq0-a",
  USER: "farmacia_prueba_user",
  PASSWORD: "H0ysgUHbtsLyUKu62IGJT2q8oYMyPKBH",
  DB: "farmacia_prueba",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
    rejectUnauthorized: true,
    }
    },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};
