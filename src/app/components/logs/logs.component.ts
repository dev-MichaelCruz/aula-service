import { Component } from '@angular/core';
import { ILog } from 'src/app/models/ILogs';
import { LogService } from './logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.scss']
})
export class LogsComponent {
  listaLogs: ILog[] = [];

  constructor(private logService: LogService) {
    this.listaLogs = logService.listaLogs
    console.log(this.listaLogs)
  }

  clearLogs() {
    for (let log of this.listaLogs) {
      this.listaLogs.shift();
    }
  }
}
