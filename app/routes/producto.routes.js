module.exports = app =>{
    const productos = require("../controllers/producto.controller.js");
    const router = require("express").Router();
    
    // Crear un nuevo Producto
    router.post("/", productos.create);
    
    // Recuperar todos los Productos
    router.get("/", productos.findAll);
    
    // Recuperar un Producto por su ID
    router.get("/:id", productos.findOne);
    
    // Actualizar un Producto por su ID
    router.put("/:id", productos.update);
    
    // Eliminar un Producto por su ID
    router.delete("/:id", productos.delete);
    
    // Eliminar todos los Productos
    router.delete("/", productos.deleteAll);
    
    app.use("/api/producto",router);

};