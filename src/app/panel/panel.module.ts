import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {SharedModule} from "../shared/shared.module";
import {TagsComponent} from './tags/tags.component';
import {CreateTagComponent} from './tags/create-tag/create-tag.component';
import {EditTagComponent} from './tags/edit-tag/edit-tag.component';
import {NewNoteComponent} from "./new-note/new-note.component";

@NgModule({
  declarations: [DashboardComponent, TagsComponent, CreateTagComponent, EditTagComponent, NewNoteComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PanelModule {
}
