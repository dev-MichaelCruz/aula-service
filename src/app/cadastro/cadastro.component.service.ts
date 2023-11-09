import { Livro } from "./ILivro";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class CadastroService {
    livros: Livro[] = [];

    addLivro(titulo: string, autor: string, anoPublicacao: number) {
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