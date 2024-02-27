import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const AuthorizedOnlineBankingGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  return true;
  // return router.navigate(['login']);
};
