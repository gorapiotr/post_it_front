import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panel-layout',
  templateUrl: './panel-layout.component.html',
  styleUrls: ['./panel-layout.component.scss']
})
export class PanelLayoutComponent implements OnInit {

  constructor(private authService: AuthService,
              private tokenService: TokenService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.authService.changeAuthStatus(false);
    this.tokenService.remove();
    this.router.navigateByUrl('/login');
  }

}
