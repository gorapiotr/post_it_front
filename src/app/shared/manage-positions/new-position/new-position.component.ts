import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-position',
  templateUrl: './new-position.component.html',
  styleUrls: ['./new-position.component.scss']
})
export class NewPositionComponent implements OnInit {

  @Output() newPosition: EventEmitter<any> = new EventEmitter<any>();

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      text: ['', Validators.required],
      done: [false, Validators.required]
    });
  }

  onSubmit() {
    this.newPosition.emit(this.formGroup.value);
  }
}
