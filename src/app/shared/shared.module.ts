import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteComponent} from './note/note.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import { AddNewCommentComponent } from './comment/add-new-comment/add-new-comment.component';
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import { ManagePositionsComponent } from './manage-positions/manage-positions.component';
import { NewPositionComponent } from './manage-positions/new-position/new-position.component';

@NgModule({
  declarations: [NoteComponent, AddNewCommentComponent, ManagePositionsComponent, NewPositionComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot()
  ],
    exports: [
        NoteComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        ManagePositionsComponent,
    ]
})
export class SharedModule {
}
