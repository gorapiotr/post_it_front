import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }

  signup(data) {
    return this.http.post(`signup`, data);
  }

  login(data) {
    return this.http.post(`login`, data);
  }

  sendPasswordResetLink(data) {
    return this.http.post(`sendPasswordResetLink`, data);
  }

  changePassword(data) {
    return this.http.post(`resetPassword`, data);
  }
}