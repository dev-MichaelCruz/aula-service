import { Component } from '@angular/core';
import { ILog } from 'src/app/models/ILogs';
import { LogService } from './logs.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
  listaLogs: ILog[] = [];

  constructor(private logService: LogService, private router: Router) {
    this.listaLogs = logService.listaLogs
    console.log(this.listaLogs)
  }

  clearLogs() {
    while (this.listaLogs.length > 0) {
      this.listaLogs.shift();
    }
  }

  redirecionar(rota: string) {
    this.router.navigate([rota])
  }

}
