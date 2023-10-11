import express from "express";
import AutorController from "../controllers/autorController";

const routes = express.Router();

routes.get("/autores", AutorController.listarAutores);
routes.get("/autores/:id", AutorController.listarAutorPorId);
routes.post("/autores", AutorController.cadastrarAutor);
routes.put("/autores/:id", AutorController.atualizarAutorPorId);
routes.delete("/autores/:id", AutorController.excluirAutorPorId);

export default routes;