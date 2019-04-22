import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TagService {

  private url = 'tags';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get<Response>(this.url);
  }

  create(data: any): Observable<any> {
    console.log(data);
    return this.http.post(this.url, data);
  }

  edit(data: any): Observable<any> {
    return this.http.put(this.url, data);
  }

  remove(data: any): Observable<any> {
    return this.http.delete(this.url, {params: {id: data.id}});
  }
}

interface Response {
  data: any;
}