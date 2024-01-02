import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalBankAccountsMainComponent } from './main.component';
import { PersonalBankAccountsOverviewPage } from '../overview/overview.component';
const routes: Routes = [
  {
    path: '',
    component: PersonalBankAccountsMainComponent,
    children: [
      {
        path: '',
        component: PersonalBankAccountsOverviewPage,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonalBankAccountRoutingModule {}
