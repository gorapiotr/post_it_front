import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../../../services/tag.service";

@Component({
  selector: 'app-add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.scss']
})
export class AddNewCommentComponent implements OnInit {

  showForm = false;

  leadOptions: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold'],
    toolbarButtonsXS: ['bold'],
    toolbarButtonsSM: ['bold'],
    toolbarButtonsMD: ['bold'],
  };

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      text: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.formGroup.value);
  }

  changeState() {
    this.showForm = !this.showForm;
  }
}
