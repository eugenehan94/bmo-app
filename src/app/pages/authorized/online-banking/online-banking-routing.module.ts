import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineBankingAuthorizedComponent } from './online-banking.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
const routes: Routes = [
  {
    path: '',
    component: OnlineBankingAuthorizedComponent,
    children: [{ path: '', component: AccountsComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedOnlineBankingRoutingModule {}
