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

  create(data): Observable<any> {
    return this.http.post<Response>('notes', data);
  }
}

interface Response {
  data: any;
}