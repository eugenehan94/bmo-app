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

// For the shared navbar - desktop view
export const setDesktopInnerNavIsOpen = createAction(
  '[Desktop Shared Navbar Components] setDesktopInnerNavIsOpen',
  props<{ menuIsOpen: boolean }>()
);
