import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http: HttpClient) {
  }

  urlBase: string = "https://localhost:44323/"

  post<T>(resource: string) {
    return this.http.post<T>(this.urlBase + resource, null);
  }


}
