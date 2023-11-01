const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const sharp = require("sharp");
const fs = require("fs");
const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));


// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

  // Configura Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads"); // Establece la carpeta de destino para las imágenes
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split('.').pop() // todo: imagen.png ->png
    cb(null, `${Date.now()}.${ext}`)
  }
});

const upload = multer({ storage: storage });

// ...

// Verifica si el directorio de destino existe, si no, créalo
const uploadDir = "public/uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Define tus rutas y usa upload.single() para procesar archivos
app.post("/api/producto/", upload.single("imagen"), (req, res) => {

});


// // drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "FARMACIA EN LINEA." });
});

require("./app/routes/turorial.routes")(app);
require("./app/routes/cliente.routes")(app);
require("./app/routes/empleado.routes")(app);
require("./app/routes/proveedor.routes")(app);
require("./app/routes/producto.routes")(app);
require("./app/routes/factura.routes")(app);
require("./app/routes/factura_detalle.routes")(app);



// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
