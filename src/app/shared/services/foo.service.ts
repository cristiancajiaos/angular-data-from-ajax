import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  url = 'assets/data/data.json';
  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }
}
