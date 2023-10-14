import { autor } from "../models/Autor.js";
import mongoose from "mongoose";

class AutorController {

  static listarAutores = (req, res) => {
    autor.find((err, autores) => {
      res.status(200).json(autores);
    });
  };
  
  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;
  
      const autorResultado = await autor.findById(id);
  
      if (autorResultado !== null) {
        res.status(200).send(autorResultado);
      } else {
        res.status(404).send({message: `${err.message} - Id do Autor não localizado.`});
      }

    } catch (erro) {
      if (erro instanceof mongoose.Error.CastError) {
        res.status(400).send({message: "Um ou mais dados fornecidos estão incorretos."});
      } else {
        res.status(500).send({message: `Erro interno de servidor.`});
      }
    }
  };
  
  static cadastrarAutor = (req, res) => {
    let autor = new autor(req.body);
  
    autor.save((err) => {
  
      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`});
      } else {
        res.status(201).send(autor.toJSON());
      }
    });
  };
  
  static atualizarAutor = (req, res) => {
    const id = req.params.id;
  
    autor.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };
  
  static excluirAutor = (req, res) => {
    const id = req.params.id;
  
    autor.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: "Autor removido com sucesso"});
      } else {
        res.status(500).send({message: err.message});
      }
    });
  };
  
}
  
export default AutorController;