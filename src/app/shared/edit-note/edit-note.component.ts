import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {TagService} from "../../services/tag.service";
import {NoteService} from "../../services/note.service";
import {FormSteps} from "../../panel/new-note/new-note.component";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {combineLatest, Observable} from "rxjs";

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss']
})
export class EditNoteComponent implements OnInit {


  note: any;
  tags: any;
  noteId: null | number;
  positions: any[];
  formStep = FormSteps.EDIT;
  formSteps = FormSteps;

  loading = true;


  constructor(private fb: FormBuilder,
              private tagsService: TagService,
              private noteService: NoteService,
              private activatedRoute: ActivatedRoute,
              private router: Router
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      combineLatest(this.getNote(params.id), this.getTags()).subscribe(([noteResp, tagsResp]) => {
        this.note = noteResp.data;
        this.tags = tagsResp.data;
        this.positions = noteResp.data.positions;
        this.noteId = noteResp.data.id;
        this.loading = false;
      });
    });
  }

  private getNote(id): Observable<any> {
    return this.noteService.get(id);
  }

  private getTags(): Observable<any> {
    return this.tagsService.getAll();
  }

  editNote(data) {
    data.id = this.noteId;
    this.noteService.edit(data).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error));
  }

  handleResponse(data) {
    this.router.navigate(['/dashboard']);
  }

  handleError(error) {
    console.log(error);
  }

}
