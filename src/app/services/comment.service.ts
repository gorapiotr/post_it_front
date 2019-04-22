import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'comments';

  constructor(private http: HttpClient) {
  }

  create(data, noteId): Observable<any> {
    return this.http.post<Response>(this.url, {text: data.text, note_id: noteId});
  }

  remove(data: any): Observable<any> {
    return this.http.delete(this.url, {params: {id: data.id}});
  }
}

interface Response {
  data: any;
}
