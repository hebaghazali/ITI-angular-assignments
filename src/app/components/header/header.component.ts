import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

  username: string = '';

  constructor(private authServ: UserAuthService) {}

  ngOnInit(): void {
    this.authServ.getLoggedStatus.subscribe((status) => {
      this.isLogged = status;
      console.log(this.authServ.username);
      if (this.isLogged) {
        if (localStorage.getItem('username'))
          this.username = localStorage.getItem('username')!;
        else this.username = this.authServ.username;
        localStorage.setItem('username', this.username);
      } else {
        this.username = '';
        localStorage.setItem('username', '');
      }
    });
  }

  confirmLogout() {
    this.authServ.logout();
    this.isLogged = this.authServ.isLogged;
  }
}
