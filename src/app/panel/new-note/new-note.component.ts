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

  noteId: null | number;
  positions: any[];
  formStep = FormSteps.CREATE;
  formSteps = FormSteps;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: false,
    idField: 'id',
    textField: 'name',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  loading = true;

  formGroup: FormGroup;
  sending = false;

  constructor(private fb: FormBuilder,
              private tagsService: TagService,
              private noteService: NoteService) {
  }

  ngOnInit() {
    this.createForm();
    this.getTags();
  }

  private getTags() {
    this.tagsService.getAll().subscribe((tags) => {
      this.dropdownList = tags.data;
      this.loading = false;
    });
  }

  private createForm() {
    this.formGroup = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['']
    });
  }

  onSubmit() {
    this.noteService.create(this.formGroup.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error));
  }

  handleResponse(data) {
    console.log(data);
    this.positions = data.data.positions;
    this.noteId = data.data.id;
    this.formStep = FormSteps.MANAGE_POSITIONS;
  }

  handleError(error) {
    console.log(error);
  }
}

enum FormSteps {
  CREATE = 'create',
  MANAGE_POSITIONS = 'positions'
}