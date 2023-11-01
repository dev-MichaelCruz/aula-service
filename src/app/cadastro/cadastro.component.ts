import { Component } from '@angular/core';
import { CadastroService } from './cadastro.component.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  tarefas!: string;
  listaTarefas!: string[];

  constructor(private cadastroService: CadastroService) {
    this.listaTarefas = this.cadastroService.tarefa;
  }

}
