import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signup',
    pathMatch: 'full',
  },
  {
    path: 'how-it-works',
    loadChildren: () =>
      import('./feature/how-it-works/how-it-works.module').then(
        (m) => m.HowItWorksModule
      ),
  },
  {
    path: 'what-is-it',
    loadChildren: () =>
      import('./feature/what-is-it/what-is-it.module').then(
        (m) => m.WhatIsItModule
      ),
  },
  {
    path: 'directory',
    loadChildren: () =>
      import('./feature/directory/directory.module').then(
        (m) => m.DirectoryModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./feature/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./feature/signup/signup.module').then((m) => m.SignupModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
