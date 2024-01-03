import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'personal',
    loadChildren: () =>
      import('./pages/personal/home/home.module').then(
        (m) => m.PersonalHomeModule
      ),
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./pages/business/home/home.module').then(
        (m) => m.BusinessHomeModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/sign-in/online-banking/online-banking.module').then(
        (m) => m.OnlineBankingModule
      ),
  },
  {
    path: '',
    redirectTo: '/personal',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
