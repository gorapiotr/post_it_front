import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelLayoutComponent} from "./panel-layout/panel-layout.component";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [PanelLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class LayoutModule {
}
