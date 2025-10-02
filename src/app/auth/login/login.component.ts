import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { loginModel } from '../../models/login';
import {UtillsService} from '../../generic/utills.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth: AuthService ,public utills : UtillsService) { }
locationData : any =""
  ngOnInit() {
    this.auth.getLocation('1011163').subscribe((res: any) => {
      console.log(res)
      this.locationData = res
     
    })
    localStorage.setItem('username', 'sumair')
    sessionStorage.setItem('username', 'faraz')
    const obj: any = {
      name: 'Sumair ul haq',
      id: 9910
    }
    localStorage.setItem("user", JSON.stringify(obj));
  }

  message = ''
  // username = ''
  // password = ''


  loginUser(data: loginModel) {
    this.auth.login(data).subscribe({
      next: (res: any) => {
        // this.message = 'Login Successfully..';
        this.message = res.message;
        if(res)
        {
          this.utills.showSuccess(this.message)
        }
        console.log('API Response:', res);
      },
      error: (err: any) => {
        console.error('Login Error:', err);
        this.message = 'Login Failed!';
      }
    });
  }
}
