import { CanActivateFn } from '@angular/router';

export const AuthorizedOnlineBankingGuard: CanActivateFn = (route, state) => {
  return true;
};
