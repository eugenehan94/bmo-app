import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineBankingComponent } from './online-banking.component';
import { OnlineBankingAuthorizedComponent } from '../../authorized/online-banking/online-banking.component';

import { AuthorizedOnlineBankingGuard } from 'src/app/guards/authorized-online-banking.guard';
const routes: Routes = [
  { path: '', component: OnlineBankingComponent },
  // @TODO: Change the path the banking/digital/accounts
  // Will leave it as test to build the page - for the meantime
  {
    path: 'test',
    component: OnlineBankingAuthorizedComponent,
    canActivate: [AuthorizedOnlineBankingGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineBankingRoutingModule {}
