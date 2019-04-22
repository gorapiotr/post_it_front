import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject< boolean >(this.Token.loggedIn());
  private authId: number;

  authStatus = this.loggedIn.asObservable();

  constructor(private Token: TokenService) { }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }

  setAuthId(value: number) {
    localStorage.setItem('authId', value.toString());
  }

  getAuthId() {
    return +localStorage.getItem('authId');
  }

  removeAuthId() {
    localStorage.removeItem('authId');
  }


  getAuthStatus(): boolean {
   return this.loggedIn.value;
  }
}
