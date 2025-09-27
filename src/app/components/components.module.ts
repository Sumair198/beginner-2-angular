import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

console.log('Components Module')
@NgModule({
  declarations: [
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ],
  exports : [
    AboutComponent , ContactComponent
  ]
})
export class ComponentsModule { }
