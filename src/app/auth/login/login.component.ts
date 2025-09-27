import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { loginModel } from '../../models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.auth.getLocation('1011163').subscribe((res: any) => {
      console.log(res)
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
        this.message = 'Login Successfully..';
        console.log('API Response:', res);
      },
      error: (err: any) => {
        console.error('Login Error:', err);
        this.message = 'Login Failed!';
      }
    });
  }
}
