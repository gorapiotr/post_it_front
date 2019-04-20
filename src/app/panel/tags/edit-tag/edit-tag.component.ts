import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../../../services/tag.service";

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit, OnChanges {

  @Input() tag: any;
  @Output() tagEdited: EventEmitter<boolean> = new EventEmitter<boolean>();

  formGroup: FormGroup;
  sending = false;

  constructor(private fb: FormBuilder,
              private tagService: TagService) {
  }

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges() {
    if (this.formGroup) {
      this.formGroup.controls['id'].setValue(this.tag.id);
      this.formGroup.controls['name'].setValue(this.tag.name);
    }
  }

  private createForm() {
    this.formGroup = this.fb.group({
      id: [this.tag.id, Validators.required],
      name: [this.tag.name, Validators.required]
    });
  }

  onSubmit() {
    this.sending = true;
    this.tagService.edit(this.formGroup.value).subscribe((data: any) => {
      this.sending = false;
      if (data.success) {
        this.tagEdited.emit(data.success);
      }
    });
  }

  remove() {
    this.sending = true;
    this.tagService.remove(this.formGroup.value).subscribe((data: any) => {
      this.sending = false;
      if (data.success) {
        this.tagEdited.emit(data.success);
      }
    });
  }

  cancel() {
    this.tagEdited.emit(false);
  }
}