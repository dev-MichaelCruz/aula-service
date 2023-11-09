import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { FormsModule } from '@angular/forms';
import { CadastroService } from './components/cadastro/cadastro.component.service';
import { AppRoutingModule } from './app.routing.module';
import { ListarComponent } from './components/listar/listar.component';
import { LogsComponent } from './components/logs/logs.component';
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