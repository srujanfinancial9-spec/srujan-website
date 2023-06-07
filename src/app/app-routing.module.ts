import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProcessComponent } from './process/process.component';
import { ResourcesComponent } from './resources/resources.component';
import { StyleguideComponent } from './styleguide/styleguide.component';
import { ServicesComponent } from './services/services.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'blog',component:ResourcesComponent},
  {path:'contact', component:ContactComponent},
  {path:'blog-detail/:id', component:BlogDetailComponent},
  {path:'privacy-policy', component:PrivacyPolicyComponent},
  {path:'404', component:PageNotFoundComponent},
  {path:'style-guide', component:StyleguideComponent},
  {path:'about', component:AboutComponent},
  {path:'process', component:ProcessComponent},
  {path:'services', component:ServicesComponent},
  {path:'disclaimer', component:DisclaimerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
