import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {UtillsService} from './generic/utills.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beginner-2';
  usersArr :  any[] = [];

  constructor(public users : AuthService , public utills : UtillsService){}
  ngOnInit() {
    // localStorage.clear();
    console.log(JSON.parse(localStorage.getItem("user") || '{}'))
    this.users.getUsersData().subscribe((res : any)=>
    {
      console.log(res) 
      
      this.usersArr = res.users

      .filter((u  :any)=> u.age > 30)
      .map((u :any)=> ({
        firstname : u.firstName,
        lastname : u.lastName,
        maidenname : u.maidenName,
        age : u.age
      }))
    })

  }
  // myEvent(evt : any)
  // {
  //   console.log(evt.target.value)
  // }
  currentValue: any = 'test'
  // myEvent(evt : any)
  // {
  //   console.log(evt)
  //   this.currentValue = evt
  // }


  skills = ["Angular", "TypeScript", "HTML", "CSS"];

  employee = {
    name: 'Sumair',
    address: {
      city: 'karachi',
      country: 'Pakistan'
    }
  }

  departments = [
    { name: "IT", employees: ["Saad", "Ali", "Hadi"] },
    { name: "HR", employees: ["Sana", "Ahmed"] }
  ];

  userProfile = {
    name: "Saad",
    age: 25,
    hobbies: ["Cricket", "Gaming", "Coding"],
    address: {
      city: "Karachi",
      zip: "75000"
    }
  };

  company = {
    name: "TechSoft",
    established: 2010,
    departments: [
      {
        deptName: "IT",
        manager: "Saad",
        employees: [
          { id: 1, name: "Ali", role: "Frontend Developer" },
          { id: 2, name: "Hadi", role: "Backend Developer" }
        ]
      },
      {
        deptName: "HR",
        manager: "Sana",
        employees: [
          { id: 3, name: "Ahmed", role: "HR Executive" }
        ]
      }
    ]
  };




}