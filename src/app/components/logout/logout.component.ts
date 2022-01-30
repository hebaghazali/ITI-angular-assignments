import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
})
export class LogoutComponent implements OnInit {
  // isLogged: boolean = false;

  constructor(private authServ: UserAuthService) {}

  ngOnInit() {
    // this.isLogged = this.authServ.isLogged;
  }
  logout() {}
}
