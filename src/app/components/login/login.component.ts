import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  login!: string;
  senha!: string

  constructor(private router:Router){}

  runLogin(rota: string) {
    this.router.navigate([rota]);
  }

}
