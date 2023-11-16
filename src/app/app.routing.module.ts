import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/listar/listar.component';
import { LogsComponent } from './components/logs/logs.component';

const routes: Routes = [
    { path: '', component: ListarComponent },
    { path: 'logs', component: LogsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }