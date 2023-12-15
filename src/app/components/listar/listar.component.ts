import { Component } from '@angular/core';
import { ILivro } from 'src/app/models/ILivro';
import { CadastroService } from '../cadastro/cadastro.component.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LogService } from '../logs/logs.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent {

  listaLivros!: ILivro[];
  indexEdicao!: number

  novoTitulo!: string
  novoAutor!: string
  novoAnoPublicacao!: number

  constructor(private cadastroService: CadastroService, private router: Router, private logService: LogService, private route: ActivatedRoute) {
    this.listaLivros = this.cadastroService.livros;
  }

  edicaoLivro(index: number) {
    const livroEdicao = this.cadastroService.getLivro(index);
    this.novoTitulo = livroEdicao.titulo;
    this.novoAutor = livroEdicao.autor;
    this.novoAnoPublicacao = livroEdicao.anoPublicacao;

    this.indexEdicao = index;
  }

  removeLivro(index: number) {
    const modificacao: string[] = ["Livro " + this.cadastroService.getLivro(index).titulo + " excluído"]
    this.cadastroService.removeLivro(index)
    this.logService.addLogs(this.obterHoraAtual(), this.obterDataAtual(), modificacao, "Exclusão")
  }

  obterHoraAtual(): string {
    const dataAtual = new Date();
    const hora = this.formatarNumero(dataAtual.getHours());
    const minutos = this.formatarNumero(dataAtual.getMinutes());
    const segundos = this.formatarNumero(dataAtual.getSeconds());
    return `${hora}:${minutos}:${segundos}`;
  }

  obterDataAtual(): string {
    const dataAtual = new Date();
    const dia = this.formatarNumero(dataAtual.getDate());
    const mes = this.formatarNumero(dataAtual.getMonth() + 1);
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  formatarNumero(numero: number): string {
    return numero < 10 ? `0${numero}` : `${numero}`;
  }

  editarDados() {
    const modificacoes: string[] = []
    const livroAtual: ILivro = this.cadastroService.getLivro(this.indexEdicao)

    if (livroAtual.titulo != this.novoTitulo) {
      modificacoes.push("Título modificado de: " + livroAtual.titulo + " para: " + this.novoTitulo);
    }
    if (livroAtual.autor != this.novoAutor) {
      modificacoes.push("Autor modificado de: " + livroAtual.autor + " para: " + this.novoAutor);
    }
    if (livroAtual.anoPublicacao != this.novoAnoPublicacao) {
      modificacoes.push("Ano de Publicação modificado de: " + livroAtual.anoPublicacao + " para: " + this.novoAnoPublicacao);
    }

    this.salvarAlteracoes(this.indexEdicao)
    this.logService.addLogs(this.obterHoraAtual(), this.obterDataAtual(), modificacoes, "Edição")
  }

  salvarAlteracoes(index: number) {
    this.cadastroService.salvarAlteracoes(index, this.novoTitulo, this.novoAutor, this.novoAnoPublicacao)
  }

  redirecionar(rota: string) {
    this.router.navigate([rota])
  }

}
