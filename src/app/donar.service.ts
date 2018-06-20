import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Donar } from 'src/app/donar';

@Injectable()
export class DonarService {

  constructor(private http: HttpClient) { }

  baseURL = 'http://localhost:3000/bloodDonars';
  findAll(): Observable<Donar[]> {

     return this.http.get<Donar[]>(this.baseURL);
  }

}
