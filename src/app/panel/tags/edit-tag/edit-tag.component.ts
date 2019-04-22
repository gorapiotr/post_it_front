import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../../../services/tag.service";

@Component({
  selector: 'app-edit-tag',
  templateUrl: './edit-tag.component.html',
  styleUrls: ['./edit-tag.component.scss']
})
export class EditTagComponent implements OnInit, OnChanges {

  errors: string[] | null;
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
    this.errors = null;
    this.tagService.edit(this.formGroup.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
    );
  }

  private handleResponse(data) {
    this.sending = false;
    if (data.success) {
      this.tagEdited.emit(data.success);
    }
  }

  private handleError(error) {
    this.sending = false;
    this.errors = error.errors.name;
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
