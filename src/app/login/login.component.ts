import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  error: string | null = null;
  form: FormGroup;

  constructor(
      private loginService: LoginService,
      private tokenService: TokenService,
      private router: Router,
      private authService: AuthService,
      private fb: FormBuilder
  ) {
    this.isAuth();
  }

  ngOnInit() {
    this.createForm();
  }

  private isAuth() {
    if (this.authService.getAuthStatus()) {
      this.router.navigate(['/dashboard']);
    }
  }

  createForm() {
    this.form = this.fb.group({
      email: ['admin@gmail.com'],
      password: ['admin']
    });
  }

  onSubmit() {
    this.error = null;
    this.loginService.login(this.form.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error));
  }

  handleResponse(data) {
    this.tokenService.handle(data.access_token);
    this.authService.setAuthId(data.data.id);
    this.authService.changeAuthStatus(true);
    this.router.navigate(['/dashboard']);
  }

  handleError(error) {
    console.log(error.error);
    this.error = error.error;
  }
}
