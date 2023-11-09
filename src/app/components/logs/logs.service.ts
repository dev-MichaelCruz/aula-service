import { Injectable } from "@angular/core";
import { ILog } from "src/app/models/ILogs";


@Injectable()
export class LogService {
    listaLogs: ILog[] = []

    constructor() { }

    addLogs(hora: string, data: string, modificacao: string[], tipo: string) {
        const novaLog: ILog = {
            hora,
            data,
            modificacao,
            tipo
        };

        this.listaLogs.push(novaLog)
    }

}