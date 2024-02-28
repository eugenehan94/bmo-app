import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { map } from 'rxjs';
export const AuthorizedOnlineBankingGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);
  const authService = inject(AuthService);

  // NOTE: CanActivate must return a Observable<boolean> | Promise<boolean> | boolean
  // using subscribe instead of pipe would give Observable<data> - type mismatch
  // thus used map to return a Observable<boolean>
  return authService.verifyJwtExist().pipe(
    map((res) => {
      if (res) {
        return true;
      } else {
        router.navigate(['login']);
        return false;
      }
    })
  );
};
