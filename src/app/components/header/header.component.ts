import { Component, OnInit } from '@angular/core';
import { UserAuthService } from './../../Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

  constructor(private authServ: UserAuthService) {}

  ngOnInit(): void {
    // this.isLogged = this.authServ.isLogged;
    this.authServ.getLoggedStatus.subscribe((status) => {
      this.isLogged = status;
    });
  }
}
