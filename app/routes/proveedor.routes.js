module.exports = app =>{
const proveedores = require("../controllers/proveedor.controller.js");
const router = require("express").Router();

// Crear un nuevo Proveedor
router.post("/", proveedores.create);

// Recuperar todos los Proveedores
router.get("/", proveedores.findAll);

// Recuperar un Proveedor por su ID
router.get("/:id", proveedores.findOne);

// Actualizar un Proveedor por su ID
router.put("/:id", proveedores.update);

// Eliminar un Proveedor por su ID
router.delete("/:id", proveedores.delete);

// Eliminar todos los Proveedores
router.delete("/", proveedores.deleteAll);

app.use("/api/proveedor", router);

};