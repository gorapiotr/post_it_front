import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() item: any;
  comments = false;

  constructor() { }

  ngOnInit() {
  }

  showComments() {
    this.comments = !this.comments;
  }

}
