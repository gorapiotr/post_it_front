import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {LayoutModule} from "./layout/layout.module";
import {PanelModule} from "./panel/panel.module";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {SharedModule} from "./shared/shared.module";
import {MainInterceptor} from "./interceptors/main.interceptor";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        AppRoutingModule,
        AppRoutingModule,
        HttpClientModule,
        SharedModule,
        LayoutModule,
        PanelModule
    ],
    providers: [{provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true}],
    bootstrap: [AppComponent]
})
export class AppModule {
}
