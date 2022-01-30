import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from './../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authServ: UserAuthService, private router: Router) {}

  ngOnInit() {
    this.isLogged = this.authServ.isLogged;
  }

  login(username: string, password: string) {
    this.authServ.login(username, password);
    this.isLogged = this.authServ.isLogged;

    if (localStorage.getItem('routeURL')) {
      this.router.navigate([`${localStorage.getItem('routeURL')}`]);
      localStorage.removeItem('routeURL');
    } else {
      this.router.navigate(['/home']);
    }
  }
}
