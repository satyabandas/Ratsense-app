import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginform',
    loadChildren: () => import('./pages/loginform/loginform.module').then( m => m.LoginformPageModule)
  },
  {
    path: 'site',
    loadChildren: () => import('./pages/site/site.module').then( m => m.SitePageModule)
  },
  {
    path: 'zonemap',
    loadChildren: () => import('./pages/zonemap/zonemap.module').then( m => m.ZonemapPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./pages/feedback/feedback.module').then( m => m.FeedbackPageModule)
  },  {
    path: 'date-range',
    loadChildren: () => import('./pages/date-range/date-range.module').then( m => m.DateRangePageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
