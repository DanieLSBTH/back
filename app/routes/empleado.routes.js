module.exports = app =>{
const empleados = require("../controllers/empleado.controller.js");

var router = require("express").Router();

// Crear un nuevo Empleado
router.post("/", empleados.create);

// Recuperar todos los Empleados
router.get("/", empleados.findAll);

// Recuperar un Empleado por su ID
router.get("/:id", empleados.findOne);

// Actualizar un Empleado por su ID
router.put("/:id", empleados.update);

// Eliminar un Empleado por su ID
router.delete("/:id", empleados.delete);

// Eliminar todos los Empleados
router.delete("/", empleados.deleteAll);

app.use("/api/empleado", router);

};