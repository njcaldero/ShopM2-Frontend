import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http: HttpClient) {
  }

  urlBase: string = "https://localhost:44323/api/v1/"
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
