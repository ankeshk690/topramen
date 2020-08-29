import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReciepeService {
  xyz:any;
  private baseUrl = 'http://starlord.hackerearth.com/TopRamen';
  constructor(private http:HttpClient) { }

   getStudent(): Observable<Object> {  
    return this.http.get(`${this.baseUrl}`);  
  }
}
