import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NoteComponent} from './note/note.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {AddNewCommentComponent} from './comment/add-new-comment/add-new-comment.component';
import {FroalaEditorModule, FroalaViewModule} from "angular-froala-wysiwyg";
import {ManagePositionsComponent} from './manage-positions/manage-positions.component';
import {NewPositionComponent} from './manage-positions/new-position/new-position.component';
import {BasicNoteFormComponent} from './basic-note-form/basic-note-form.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { EditNoteComponent } from './edit-note/edit-note.component';
import {RouterModule} from "@angular/router";
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
    declarations: [NoteComponent, AddNewCommentComponent, ManagePositionsComponent, NewPositionComponent, BasicNoteFormComponent, EditNoteComponent, SearchBarComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        NgMultiSelectDropDownModule,
        RouterModule
    ],
    exports: [
        NoteComponent,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        ManagePositionsComponent,
        BasicNoteFormComponent,
        SearchBarComponent
    ]
})
export class SharedModule {
}
