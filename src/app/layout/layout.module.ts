import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PanelLayoutComponent} from "./panel-layout/panel-layout.component";
import {RouterModule} from "@angular/router";
import {NoteService} from "../services/note.service";

@NgModule({
  declarations: [PanelLayoutComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [
    NoteService
  ]
})
export class LayoutModule {
}
