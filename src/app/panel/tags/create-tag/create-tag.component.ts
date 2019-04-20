import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TagService} from "../../../services/tag.service";

@Component({
  selector: 'app-create-tag',
  templateUrl: './create-tag.component.html',
  styleUrls: ['./create-tag.component.scss']
})
export class CreateTagComponent implements OnInit {

  @Output() tagCreated: EventEmitter<boolean> = new EventEmitter<boolean>();

  formGroup: FormGroup;
  sending = false;

  constructor(private fb: FormBuilder,
              private tagService: TagService) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      name: ['', Validators.required]
    });
  }

  onSubmit() {
    this.sending = true;
    this.tagService.create(this.formGroup.value).subscribe((data: any) => {
      this.sending = false;
      if (data.success) {
        this.formGroup.controls['name'].setValue('');
        this.tagCreated.emit(data.success);
      }
    });
  }
}
