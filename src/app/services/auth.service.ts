import { Injectable } from '@angular/core';
import {ApiService} from './api.service'
import { loginModel } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public apiservice : ApiService) { }

  login(data : loginModel)
  {
    return this.apiservice.post('auth/login' , data)
  }
  getLocation(practice_code : any)
  {
    return this.apiservice.get('TalkCheckinPhaseTwo/GetLocation?PracticeCode=1011163', {PracticeCode : practice_code})
  }
}
