import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http: HttpClient) {
  }

  urlBase: string = "http://nescalro-001-site1.htempurl.com/api/v1/"
  private setHeaders() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });
  }


  post<T>(resource: string, body?: any) {
    return this.http.post<T>(this.urlBase + resource, body);
  }


}
