import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../../services/tag.service";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

  note = {
    title: '',
    description: '',
    tags: []
  };

  noteId: null | number;
  positions: any[];
  formStep = FormSteps.CREATE;
  formSteps = FormSteps;
  tags: any;

  loading = true;


  constructor(private fb: FormBuilder,
              private tagsService: TagService,
              private noteService: NoteService) {
  }

  ngOnInit() {
    this.getTags();
  }

  private getTags() {
    this.tagsService.getAll().subscribe((tags) => {
      this.tags = tags.data;
      this.loading = false;
    });
  }

  createNote(data) {
    this.noteService.create(data).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error));
  }

  handleResponse(data) {
    this.positions = data.data.positions;
    this.noteId = data.data.id;
    this.formStep = FormSteps.MANAGE_POSITIONS;
  }

  handleError(error) {
    console.log(error);
  }
}

export enum FormSteps {
  CREATE = 'create',
  MANAGE_POSITIONS = 'positions',
  EDIT = 'edit'
}