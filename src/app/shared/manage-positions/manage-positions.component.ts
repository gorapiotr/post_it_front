import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-manage-positions',
  templateUrl: './manage-positions.component.html',
  styleUrls: ['./manage-positions.component.scss']
})
export class ManagePositionsComponent implements OnInit {

  showInputVar = null;

  data = {
    options: [
      {
        id: 1,
        text: 'Option 1',
        done: true
      },
      {
        id: 2,
        text: 'Option 2',
        done: false
      }
    ]
  };


  @Input() positions: any = [];

  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  private createForm() {
    this.formGroup = this.fb.group({
      positions: this.fb.array([])
    });
    this.patch();
  }

  patch() {
    const control = <FormArray>this.formGroup.get('positions');
    this.data.options.forEach(x => {
      control.push(this.patchValues(x.text, x.done, x.id));
    });
  }

  patchValues(text, done, id = null,) {
    return this.fb.group({
      id: [id],
      text: [text],
      done: [done]
    });
  }

  pushNewPosition(position) {
    const control = <FormArray>this.formGroup.get('positions');
    control.push(this.patchValues(position.text, position.done));
  }

  showInput(value) {
    this.showInputVar = value;
  }
}
