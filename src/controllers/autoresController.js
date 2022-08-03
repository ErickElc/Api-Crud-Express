import autor from "../models/Autor.js";

class AutorController{
    static ListarAutor = (req, res) => {
        autor.find((err, autor) =>{
            (!err) ? res.status(200).json(autor) : res.status(404).send(`${err.message} Não foi possível localizar os autor`);
        });
    };
    static ListaAutorPorId = (req, res) => {
        const id = req.params.id;
        autor.findById(id, (err, autor)=>{
            (err) ? res.status(404).send({message: `${err.message} Não foi possível localizar o autor`}) : res.status(200).send(autor);
        })
    };
    static CadastrarAutor = (req,res) =>{
        let autores = new autor(req.body);
        autores.save((err)=> {
            (err) ?  res.status(500).send({message: `${err.message} Falha no cadastro!`}) :res.status(201).send(autores.toJSON());
        });
    }
    static AtualizarAutor = (req, res) =>{
        const id = req.params.id;
        autor.findByIdAndUpdate(id, {$set: req.body}, err =>{
            (!err) ? res.status(200).send({message:"Autor atualizado com sucesso"}) : res.status(500).send({message:`${err.message} Erro ao atualizar!`})
        });
    }
    static DeletarAutor = (req, res) =>{
        const id = req.params.id;
        autor.findByIdAndRemove(id, err =>{
            (!err) ? res.status(200).send({message:"Autor Deletado com sucesso"}) : res.status(500).send({message:`${err.message} Não foi possível deletar o Autor`})
        });
    }
  
}

export default AutorController;