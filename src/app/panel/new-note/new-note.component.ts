import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../../services/tag.service";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.scss']
})
export class NewNoteComponent implements OnInit {

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
              private tagsService: TagService) {
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
    console.log(this.formGroup.value);
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

}
