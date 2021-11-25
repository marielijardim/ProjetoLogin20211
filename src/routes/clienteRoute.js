const express = require("express");
const routes = express.Router();
const clienteController = require("../Controller/clienteController");
const upload = require("../config/multer");




//Create
//Abre add
routes.get("/add", clienteController.abreadd );
//Add
routes.post("/add", upload.single("foto"), clienteController.add );

//Read
//List
routes.get("/", clienteController.list );
//list filtro
routes.post("/", clienteController.filtro );

//Update
//Abre edit
routes.get("/edt/:id", clienteController.abreedit );
//Edit
routes.post("/edt/:id", upload.single("foto") , clienteController.edit );

//Delete
routes.get("/del/:id", clienteController.del );

module.exports = routes;