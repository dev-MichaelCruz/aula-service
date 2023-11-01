import { Livro } from "./ILivro";

export class CadastroService {
    livros: Livro[] = [];

    addLivro(titulo: string, autor: string, anoPublicacao: string) {
        const novoLivro: Livro = {
            titulo,
            autor,
            anoPublicacao
        };
        this.livros.push(novoLivro);
    }

    removeLivro(index: number) {
        this.livros.splice(index, 1);
    }
}