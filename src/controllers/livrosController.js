import livros from "../models/Livro.js";
class LivroController{
    static listarLivros = (req, res) => {
        livros.find()
            .populate("autor")
            .exec((err, Livros) =>{
                (!err) ? res.status(200).json(Livros) : res.status(404).send(`${err.message} Não foi possível localizar os livros`);
            });
    };
    static ListarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate("autor", "nome")
        .exec((err, livros)=>{
            (err) ? res.status(404).send({message: `${err.message} Id do livro não localizado`}) : res.status(200).send(livros);
        })
    };
    static CadastrarLivro = (req,res) =>{
        let livro = new livros(req.body);
        livro.save((err)=> {
            (err) ?  res.status(500).send({message: `${err.message} Falha no cadastro!`}) :res.status(201).send(livro.toJSON());
        });
    }
    static AtualizarLivro = (req, res) =>{
        const id = req.params.id;
        livros.findByIdAndUpdate(id, {$set: req.body}, err =>{
            (!err) ? res.status(200).send({message:"Livro atualizado com sucesso"}) : res.status(500).send({message:`${err.message} Erro ao atualizar!`})
        });
    }
    static DeletarLivro = (req, res) =>{
        const id = req.params.id;
        livros.findByIdAndRemove(id, err =>{
            (!err) ? res.status(200).send({message:"Livro Deletado com sucesso"}) : res.status(500).send({message:`${err.message} Não foi possível deletar o livro`})
        });
    }
    static ListarLivroPorEditora = (req, res) =>{
        const editora = req.query.editora;
        livros.find({'editora': editora}, {}, (err, livros)=>{
            (!err) ? res.status(200).json(livros) : res.status(404).send(`${err.message} Não foi possível localizar os livros`);
        })
    }
}

export default LivroController;