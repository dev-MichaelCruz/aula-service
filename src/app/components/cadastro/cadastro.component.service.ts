import { ILivro } from "../../models/ILivro";

export class CadastroService {
    livros: ILivro[] = [];

    addLivro(titulo: string, autor: string, anoPublicacao: number) {
        const novoLivro: ILivro = {
            titulo,
            autor,
            anoPublicacao
        };
        this.livros.push(novoLivro);
    }

    removeLivro(index: number) {
        this.livros.splice(index, 1);
    }

    getLivro(index: number): ILivro {
        return this.livros[index];
    }

    salvarAlteracoes(index: number, novoTitulo: string, novoAutor: string, novoAnoPublicacao: number) {
        const novoLivro: ILivro = {
            titulo: novoTitulo,
            autor: novoAutor,
            anoPublicacao: novoAnoPublicacao
        };

        this.livros[index] = novoLivro;
    }


}