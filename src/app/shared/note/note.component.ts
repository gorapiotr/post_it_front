import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {NoteService} from "../../services/note.service";
import {CommentService} from "../../services/comment.service";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  @Input() item: any;
  comments = false;
  userId: number;
  @Output() noteRemoved: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor(private authService: AuthService,
              private noteService: NoteService,
              private commentService: CommentService
  ) {
  }

  ngOnInit() {
    this.userId = this.authService.getAuthId();
    console.log(this.userId);
  }

  showComments() {
    this.comments = !this.comments;
  }

  reloadComments(comments) {
    this.item.comments = comments;
  }

  remove() {
    this.noteService.remove(this.item).subscribe((data: any) => {
      if (data.success) {
        this.noteRemoved.emit(data.success);
      }
    });
  }

  removeComment(comment) {
    this.commentService.remove(comment).subscribe((data: any) => {
      if (data.success) {
        this.item.comments = this.item.comments.filter((item) => {
          return item.id !== comment.id;
        });
      }
    });
  }

}
