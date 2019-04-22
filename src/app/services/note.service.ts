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

  edit(data: any): Observable<any> {
    return this.http.put('notes', data);
  }

  create(data): Observable<any> {
    return this.http.post<Response>('notes', data);
  }
}

interface Response {
  data: any;
}