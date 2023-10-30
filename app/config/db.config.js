module.exports = {
  HOST: "roundhouse.proxy.rlwy.net",
  USER: "postgres",
  PASSWORD: "acfddgfb4*3CEeegaDd4Dc-fgg1cAd3C",
  DB: "railway",
  dialect: "postgres",
  ssl: true,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
};
