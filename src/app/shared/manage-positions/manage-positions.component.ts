import {Component, Input, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {PositionService} from "../../services/position.service";
import {combineLatest} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-manage-positions',
  templateUrl: './manage-positions.component.html',
  styleUrls: ['./manage-positions.component.scss']
})
export class ManagePositionsComponent implements OnInit {


  @Input() positions: any[];
  @Input() noteId: number;
  showInputVar = null;

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private positionService: PositionService,
              private router: Router) {
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
    this.positions.forEach(x => {
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

  onSubmit() {

    const newPositions = this.formGroup.value.positions.filter((item) => {
      return item.id === null;
    });

    const editedPositions = this.formGroup.value.positions.filter((item) => {
      return item.id != null;
    });

    if (newPositions.length && editedPositions.length) {
      combineLatest(this.editPositions(editedPositions), this.createPositions(newPositions)).subscribe(([editedResp, newResp]) => {
        console.log('add and edit');
        this.navigateTo();
      });
    }

    if (newPositions.length && !editedPositions.length) {
      this.createPositions(newPositions).subscribe((resp) => {
        console.log('only addd');
        this.navigateTo();
      });
    }

    if (!newPositions.length && editedPositions.length) {
      this.editPositions(editedPositions).subscribe((resp) => {
        console.log('only edit');
        this.navigateTo();
      });
    }
  }

  editPositions(editedPositions) {
    return this.positionService.edit(editedPositions);
  }

  createPositions(newPositions) {
    return this.positionService.create(this.noteId, newPositions);
  }

  private navigateTo() {
    this.router.navigate(['/dashboard']);
  }

  get formData() { return <FormArray>this.formGroup.get('positions'); }
}
