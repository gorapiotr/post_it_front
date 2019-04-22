import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<Response>('notes');
  }

  get(id: number): Observable<any> {
    return this.http.get<Response>('notes/' + id);
  }

  getComments(id: number): Observable<any> {
    return this.http.get<Response>('notes/' + id + '/comments');
  }
  edit(data: any): Observable<any> {
    return this.http.put('notes', data);
  }

  create(data): Observable<any> {
    return this.http.post<Response>('notes', data);
  }

  remove(data: any): Observable<any> {
    return this.http.delete('notes', {params: {id: data.id}});
  }
}

interface Response {
  data: any;
}