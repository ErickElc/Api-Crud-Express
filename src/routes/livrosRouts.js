import express  from "express";
import LivroController from "../controllers/livrosController.js";


const router = express.Router();

router
    .get('/livros', LivroController.listarLivros)
    .get("/livros/busca", LivroController.ListarLivroPorEditora)
    .get('/livros/:id', LivroController.ListarLivroPorId)
    .post('/livros', LivroController.CadastrarLivro)
    .put("/livros/:id", LivroController.AtualizarLivro)
    .delete("/livros/:id", LivroController.DeletarLivro)

export default router;
