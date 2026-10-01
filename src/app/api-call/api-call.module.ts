import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiCallRouting } from './api-call-routing.module';
import { ContactComponent } from '../contact/contact.component';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ApiCallRouting
  ]
})
export class ApiCallModule { }
