import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-manage-positions',
  templateUrl: './manage-positions.component.html',
  styleUrls: ['./manage-positions.component.scss']
})
export class ManagePositionsComponent implements OnInit {


  @Input() positions: any = [];

  constructor() {
  }

  ngOnInit() {
  }
}
