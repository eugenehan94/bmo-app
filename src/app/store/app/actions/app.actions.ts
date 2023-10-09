import { createAction, props } from '@ngrx/store';

export const setIsMobileMenuOpen = createAction(
  '[App Component] setIsMobileMenuOpen',
  props<{ isOpen: boolean }>()
);

export const setIsMobileSignInMenuOpen = createAction(
  '[App Component] setIsMobileSignInMenuOpen',
  props<{ isOpen: boolean }>()
);

export const setScreenSize = createAction(
  '[App] setScreenSize',
  props<{ screenSize: string }>()
);
