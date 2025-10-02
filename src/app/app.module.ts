import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
// import {FormsModule} from '@angular/forms'
import {AuthModule} from './auth/auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // FormsModule,
    AuthModule,
    NgbModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    BrowserAnimationsModule,
    // ToastrModule
    ToastrModule.forRoot(),
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
