import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

// Personal
import { PersonalBankAccountsMainComponent } from 'src/app/pages/personal/bank-accounts/main/main.component';
import { PersonalBankAccountsOverviewPage } from 'src/app/pages/personal/bank-accounts/overview/overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: 'bank-accounts',
  //   component: PersonalBankAccountsMainComponent,
  //   // children: [{ path: '/', component: PersonalBankAccountsOverviewPage }],
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalRoutingModule {}
