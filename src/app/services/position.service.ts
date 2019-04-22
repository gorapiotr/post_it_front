import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private url = 'positions';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<Response>(this.url);
  }

  create(noteId: number,data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.url, { note_id: noteId, positions: data});
  }

  edit(data: any): Observable<any> {
    return this.http.put(this.url, {positions: data});
  }

  remove(data: any): Observable<any> {
    return this.http.delete(this.url, {params: {id: data.id}});
  }
}
