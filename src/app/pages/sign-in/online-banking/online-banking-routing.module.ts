import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlineBankingComponent } from './online-banking.component';
import { OnlineBankingUnauthorizedComponent } from '../online-banking-unauthorized/online-banking-unauthorized.component';

const routes: Routes = [
  { path: '', component: OnlineBankingComponent },
  {
    path: 'error',
    component: OnlineBankingUnauthorizedComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnlineBankingRoutingModule {}
