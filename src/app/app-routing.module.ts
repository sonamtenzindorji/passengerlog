import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', 
  redirectTo: 'login', 
  pathMatch: 'full'
 },
  { path: 'login', 
  loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
},

   { path: 'home', 
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
 {
  path: 'signup',
    loadChildren: () => import('../app/pages/signup/signup.module').then( m => m.SignupPageModule)
 },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
