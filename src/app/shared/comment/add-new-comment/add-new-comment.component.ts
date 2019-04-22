import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CommentService} from "../../../services/comment.service";
import {NoteService} from "../../../services/note.service";

@Component({
  selector: 'app-add-new-comment',
  templateUrl: './add-new-comment.component.html',
  styleUrls: ['./add-new-comment.component.scss']
})
export class AddNewCommentComponent implements OnInit {

  @Input() noteId;
  @Output() reloadComments: EventEmitter<any> = new EventEmitter<any>();
  sending = false;

  showForm = false;

  leadOptions: Object = {
    charCounterCount: true,
    toolbarButtons: ['bold'],
    toolbarButtonsXS: ['bold'],
    toolbarButtonsSM: ['bold'],
    toolbarButtonsMD: ['bold'],
  };

  formGroup: FormGroup;

  constructor(private fb: FormBuilder,
              private commentService: CommentService,
              private noteService: NoteService
  ) {
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
    this.sending = true;
    this.commentService.create(this.formGroup.value, this.noteId).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error));
  }

  handleResponse(data) {
    this.noteService.getComments(this.noteId).subscribe((data) => {
      this.reloadComments.emit(data);
      this.sending = false;
      this.showForm = false;
    });
  }

  handleError(error) {
    this.sending = false;
    console.log(error);
  }

  changeState() {
    this.showForm = !this.showForm;
  }
}
