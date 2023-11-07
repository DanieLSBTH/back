module.exports = {
  HOST: "dpg-cl4tmodqkk8c73c1knp0-a",
  USER: "farmacia_prueba_dq74_user",
  PASSWORD: "G33HlVfdZujks9qY4fLkApynMylpDLGT",
  DB: "farmacia_prueba_dq74",
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
