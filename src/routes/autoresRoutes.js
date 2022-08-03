import express  from "express";
import AutorController from "../controllers/autoresController.js";

const router = express.Router();

router
    .get('/autores', AutorController.ListarAutor)
    .get('/autores/:id', AutorController.ListaAutorPorId)
    .post('/autores', AutorController.CadastrarAutor)
    .put("/autores/:id", AutorController.AtualizarAutor)
    .delete("/autores/:id", AutorController.DeletarAutor)

export default router;
