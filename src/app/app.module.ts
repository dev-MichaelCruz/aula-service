import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { ListarComponent } from './components/listar/listar.component';
import { LogsComponent } from './components/logs/logs.component';

import { CadastroService } from './components/cadastro/cadastro.component.service';
import { LogService } from './components/logs/logs.service';

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
  providers: [CadastroService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }