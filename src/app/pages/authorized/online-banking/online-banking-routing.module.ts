import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineBankingAuthorizedComponent } from './online-banking.component';
const routes: Routes = [
  { path: '', component: OnlineBankingAuthorizedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorizedOnlineBankingRoutingModule {}
