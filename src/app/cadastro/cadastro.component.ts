import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { Livro } from './ILivro';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {
  listaLivros!: Livro[];

  titulo!: string
  autor!: string
  anoPublicacao!: number

  constructor(private cadastroService: CadastroService) {
    this.listaLivros = this.cadastroService.livros;
  }

  addLivro() {
    this.cadastroService.addLivro(this.titulo, this.autor, this.anoPublicacao)
    this.clearDados();
  }

  removeLivro(index: number) {
    this.cadastroService.removeLivro(index)
  }

  clearDados() {
    this.titulo = "";
    this.autor = "";
    this.anoPublicacao;
  }

}
