import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { CadastroService } from './components/cadastro/cadastro.component.service';
import { AppRoutingModule } from './app.routing.module';
import { ListarComponent } from './components/listar/listar.component';
import { LogsComponent } from './components/logs/logs.component';
import { LogService } from './components/logs/logs.service';
=======
>>>>>>> b6e2b6dc3a2c85589c709490a8b3ccf09e615fd5

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ListarComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
<<<<<<< HEAD
  providers: [CadastroService, LogService],
=======
  providers: [],
>>>>>>> b6e2b6dc3a2c85589c709490a8b3ccf09e615fd5
  bootstrap: [AppComponent]
})
export class AppModule { }