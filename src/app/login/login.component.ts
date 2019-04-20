import {Component, OnInit} from '@angular/core';
import {Form, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['admin@gmail.com'],
      password: ['password']
    });
  }

  onSubmit() {
    this.router.navigate(['/dashboard']);
  }
}
