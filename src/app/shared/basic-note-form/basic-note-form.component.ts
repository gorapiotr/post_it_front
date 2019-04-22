import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../../services/tag.service";
import {NoteService} from "../../services/note.service";

@Component({
  selector: 'app-basic-note-form',
  templateUrl: './basic-note-form.component.html',
  styleUrls: ['./basic-note-form.component.scss']
})
export class BasicNoteFormComponent implements OnInit {

  @Input() data: any;
  @Input() tags: any;
  @Input() edit: boolean;
  @Output() createNote: EventEmitter<any> = new EventEmitter<any>();
  @Output() editNote: EventEmitter<any> = new EventEmitter<any>();

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

  formGroup: FormGroup;
  sending = false;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
    this.dropdownList = this.tags;
    this.selectedItems = this.data.tags;
  }

  private createForm() {
    this.formGroup = this.fb.group({
      title: [this.data.title, Validators.required],
      description: [this.data.description, Validators.required],
      tags: [this.data.tags]
    });
  }

  onSubmit() {
    this.edit ? this.editNote.emit(this.formGroup.value) : this.createNote.emit(this.formGroup.value);
  }
}