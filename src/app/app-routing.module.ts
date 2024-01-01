import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Personal
import { PersonalBankAccountsMainComponent } from 'src/app/pages/personal/bank-accounts/main/main.component';
import { PersonalBankAccountsOverviewPage } from 'src/app/pages/personal/bank-accounts/overview/overview.component';
// Business
import { BusinessHomeComponent } from 'src/app/pages/business/home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/personal',
    pathMatch: 'full',
  },
  {
    path: 'personal',
    loadChildren: () =>
      import('./pages/personal/home/home.module').then(
        (m) => m.PersonalHomeModule
      ),
  },
  {
    // @TODO: move to personal as child route. Do it after module setup complete or code will break
    path: 'personal/bank-accounts',
    component: PersonalBankAccountsMainComponent,
    children: [{ path: '', component: PersonalBankAccountsOverviewPage }],
  },
  {
    path: 'business',
    loadChildren: () =>
      import('./pages/business/home/home.module').then(
        (m) => m.BusinessHomeModule
      ),
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
