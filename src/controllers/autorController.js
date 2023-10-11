import { autor } from "../models/Autor.js"

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async atualizarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Autor atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async excluirAutorPorId(req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({ message: "Autor excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            autores.push(req.body);
            res.status(201).json({ message: "Criado com sucesso", autor: novoAutor});
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor` })
            
        }
    }

};

export default AutorController;