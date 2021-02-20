import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url: string;

  constructor(private http: HttpClient) { }

  getLoginUser(response){
    this.url =  'http://localhost:5001/Api/Login/Savesresponse';
    return this.http.post(this.url,response);
  }
}