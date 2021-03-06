import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  private isLoggedSubject: BehaviorSubject<boolean>;

  username: string = '';
  password: string = '';

  constructor() {
    this.isLoggedSubject = new BehaviorSubject<boolean>(this.isLogged);
  }

  login(username: string, password: string) {
    const token = 'yefrsd253csx';
    localStorage.setItem('token', token);

    this.username = username;
    this.password = password;

    this.isLoggedSubject.next(true);
  }

  logout() {
    localStorage.removeItem('token');
    this.isLoggedSubject.next(false);

    this.username = '';
    this.password = '';
  }

  get isLogged(): boolean {
    return localStorage.getItem('token') ? true : false;
  }

  get getLoggedStatus(): Observable<boolean> {
    return this.isLoggedSubject.asObservable();
  }
}
