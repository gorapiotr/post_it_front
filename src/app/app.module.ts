import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "./layout/layout.module";
import {PanelModule} from "./panel/panel.module";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,

        LayoutModule,
        PanelModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
