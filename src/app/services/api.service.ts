import { Injectable } from '@angular/core';
import { environment } from '../../environments/environement';
import { HttpClient } from '@angular/common/http';
import { loginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  private baseUrl = environment.apiBaseUrl;
  private breezeAPiUrl = environment.breezeAPiUrl;


  constructor(public http : HttpClient) { }

  post(endpoint  : string , data: loginModel)
  {
    return this.http.post(`${this.baseUrl}${'/api/'}${endpoint}`, data)
  }
  get(endpoint : string , params  :any)
  {
    return this.http.get(`${this.breezeAPiUrl}${'/api/'}${endpoint}` , {params})
  }
}
