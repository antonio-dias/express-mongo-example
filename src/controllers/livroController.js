import livro from "../models/Livro.js"

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async atualizarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Livro atualizado" });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
    };

    static async excluirLivroPorId(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "Livro excluído com sucesso" });
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha na exclusão` });
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            livros.push(req.body);
            res.status(201).json({ message: "Criado com sucesso", livro: novoLivro});
        } catch (error) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` })
            
        }
    }

};

export default LivroController;