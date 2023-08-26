import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicationComponent } from '../publication/publication.component';
import { ContactComponent } from '../contact/contact.component';

const routes:Routes = [
  {path: 'publication', component: PublicationComponent},
  {path:'contact', component:ContactComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ApiCallRouting {}
