import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import 'rxjs/add/operator/catch';
import {AuthService} from "../services/auth.service";
import {TokenService} from "../services/token.service";
import {ErrorObservable} from "rxjs-compat/observable/ErrorObservable";

@Injectable()
export class MainInterceptor implements HttpInterceptor {

    constructor(private router: Router,
                private Auth: AuthService,
                private Token: TokenService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const access_token = localStorage.getItem('token');

        const url = 'http://localhost:80/api/';

        const customReq = request.clone({
            url: url + request.url,
            headers: request.headers.append('Authorization', `Bearer ${access_token}`)
        });

        return next.handle(customReq)
            .catch((err: HttpErrorResponse) => {
                let errMsg: string;
                const errorResponse = JSON.stringify(err.error) || err.message;
                errMsg = `${err.status} - ${err.statusText || ''} Details: ${errorResponse}`;
                console.log(errMsg);

                if (err.status === 401) {
                    this.Auth.changeAuthStatus(false);
                    this.Token.remove();
                    this.router.navigateByUrl('/');
                }

                return ErrorObservable.create(err.error);
            });
    }
}