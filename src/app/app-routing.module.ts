import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Personal
import { HomeComponent } from 'src/app/pages/personal/home/home.component';
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
    component: HomeComponent,
  },
  {
    path: 'personal/bank-accounts',
    component: PersonalBankAccountsMainComponent,
    children: [{ path: '', component: PersonalBankAccountsOverviewPage }],
  },
  {
    path: 'business',
    component: BusinessHomeComponent,
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
