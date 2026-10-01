import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';

const publicationsUrl = 'https://docs.google.com/spreadsheets/d/1GP-fTs1kgy_wjX7VU3dIOb_NWiLA2bbXOxQrlPdLe5E/edit?usp=sharing';

const routes:Routes = [
  // the old publications page now lives in a Google Sheet
  {path: 'publication', canActivate: [() => { window.location.replace(publicationsUrl); return false; }], component: ContactComponent},
  {path:'contact', component:ContactComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ApiCallRouting {}
