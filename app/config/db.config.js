const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('verceldb', 'default', 'fTjywm5J3oZD', {
  host: 'ep-quiet-math-78680175-pooler.us-east-1.postgres.vercel-storage.com',
  dialect: 'postgres',
  port: 5432, // Asegúrate de que el puerto sea correcto
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});

// Resto de tu código para definir modelos y realizar consultas

module.exports = sequelize;
