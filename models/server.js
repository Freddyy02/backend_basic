const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usersRoutePath = "/api/Users";

    //Middlewares
    this.middlewares();

    //Rutas aplicación
    this.routes();
  }

  middlewares() {
    //CORS
    this.app.use(cors());
    // Lectura y PARSE
    this.app.use(express.json());
    //Directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usersRoutePath, require("../routes/user"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor en puerto " + this.port);
    });
  }
}

module.exports = Server;
