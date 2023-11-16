import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';
import { ILivro } from '../../models/ILivro';
import { Router } from '@angular/router';
import { LogService } from '../logs/logs.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})

export class CadastroComponent {
  listaLivros!: ILivro[];
  indexEdicao!: number

  titulo!: string
  autor!: string
  anoPublicacao!: number

  constructor(private cadastroService: CadastroService, private router: Router, private logService: LogService) {
    this.listaLivros = this.cadastroService.livros;
  }

  addLivro() {
    this.cadastroService.addLivro(this.titulo, this.autor, this.anoPublicacao)
    this.clearDados();
  }

  clearDados() {
    this.titulo = "";
    this.autor = "";
    this.anoPublicacao;
  }

  redirecionar(rota: string) {
    this.router.navigate([rota])
  }

}
