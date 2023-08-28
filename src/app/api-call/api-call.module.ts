import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationComponent } from '../publication/publication.component';
import { ApiCallRouting } from './api-call-routing.module';
import { ContactComponent } from '../contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [
    PublicationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ApiCallRouting,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ]
})
export class ApiCallModule { }
