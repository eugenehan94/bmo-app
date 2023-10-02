import { createAction, props } from '@ngrx/store';

export const setIsMobileMenuOpen = createAction(
  '[App Component] setIsMobileMenuOpen',
  props<{isOpen: boolean}>()
);
