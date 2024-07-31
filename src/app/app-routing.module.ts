import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthorizedOnlineBankingGuard } from './guards/authorized-online-banking.guard';

const routes: Routes = [
  {
    path: 'personal',
    loadChildren: () =>
      import('./pages/personal/home/home.module').then(
        (m) => m.PersonalHomeModule
      ),
  },
  {
    path: 'open-account',
    loadChildren: () =>
      import(
        './pages/open-account/personal/personal-info/personal-info.module'
      ).then((m) => m.PersonalInfoModule),
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
    // Path for when user signs in for online banking
    path: 'banking/digital/accounts',
    loadChildren: () =>
      import('./pages/authorized/online-banking/online-banking.module').then(
        (m) => m.OnlineBankingAuthorizedModule
      ),
    canActivate: [AuthorizedOnlineBankingGuard],
  },
  {
    path: '',
    redirectTo: '/personal',
    pathMatch: 'full',
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/not-found/main/main.module').then((m) => m.MainModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'top',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
