import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', pathMatch: 'full', component:HomeComponent},
  {path:'home', pathMatch: 'full', redirectTo: ''},
  {path:'blog',loadComponent: () => import('./resources/resources.component').then(m => m.ResourcesComponent)},
  {path:'blog-detail/:id', loadComponent: () => import('./blog-detail/blog-detail.component').then(m => m.BlogDetailComponent)},
  {path:'privacy-policy', loadComponent: () => import('./privacy-policy/privacy-policy.component').then(m => m.PrivacyPolicyComponent)},
  {path:'404', loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
  {path:'style-guide', loadComponent: () => import('./styleguide/styleguide.component').then(m => m.StyleguideComponent)},
  {path:'about', loadComponent: () => import('./about/about.component').then(m => m.AboutComponent)},
  {path:'process', loadComponent: () => import('./process/process.component').then(m => m.ProcessComponent)},
  {path:'services', loadComponent: () => import('./services/services.component').then(m => m.ServicesComponent)},
  {path:'disclaimer', loadComponent: () => import('./disclaimer/disclaimer.component').then(m => m.DisclaimerComponent)},
  {path:'disclosure', loadComponent: () => import('./disclosure/disclosure.component').then(m => m.DisclosureComponent)},
  {path:'api', loadChildren: () => import('./api-call/api-call.module').then(m => m.ApiCallModule)},
  {path:'**', loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', preloadingStrategy: PreloadAllModules, initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
