import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpUtilService {

  constructor(private http: HttpClient) {
  }

  urlBase: string = "https://localhost:44323/"


  post(resource: string) {
    var res = this.http.post(this.urlBase + resource,null)
      .subscribe(data => {   // data is already a JSON object
        console.log(data);
          return data;
      });

  

  }


}
