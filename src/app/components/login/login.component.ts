import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authServ: UserAuthService) {}

  ngOnInit() {
    this.isLogged = this.authServ.isLogged;
  }

  login() {
    this.authServ.login('username', 'password');
    this.isLogged = this.authServ.isLogged;
  }

  logout() {
    this.authServ.logout();
    this.isLogged = this.authServ.isLogged;
  }
}
