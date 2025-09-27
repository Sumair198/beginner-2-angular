import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'beginner-2';
  ngOnInit()
  {
    // localStorage.clear();
  console.log(JSON.parse(localStorage.getItem("user") || '{}'))
  
  }
  // myEvent(evt : any)
  // {
  //   console.log(evt.target.value)
  // }
  currentValue : any = 'test'
  // myEvent(evt : any)
  // {
  //   console.log(evt)
  //   this.currentValue = evt
  // }
}