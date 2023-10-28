const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.clientes= require("./cliente.model.js")(sequelize, Sequelize);
db.empleado = require("./empleado.model.js")(sequelize, Sequelize);
db.proveedor = require("./proveedor.model.js")(sequelize, Sequelize);
db.producto = require("./producto.model.js")(sequelize, Sequelize);
db.factura = require("./factura.model.js")(sequelize, Sequelize);
db.factura_detalle = require("./factura_detalle.model.js")(sequelize, Sequelize);

module.exports = db;
