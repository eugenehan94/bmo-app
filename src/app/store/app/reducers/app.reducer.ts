import { createReducer, on } from '@ngrx/store';

import * as AppActions from '../actions/app.actions';

export const isMobileMenuOpen = false;
export const isMobileSignInMenuOpen = false;

export const IsMobileMenuOpenReducer = createReducer(
  isMobileMenuOpen,
  on(AppActions.setIsMobileMenuOpen, (state, props: { isOpen: boolean }) => {
    return props.isOpen;
  })
);

export const IsMobileSignInMenuOpenReducer = createReducer(
  isMobileSignInMenuOpen,
  on(AppActions.setIsMobileSignInMenuOpen, (state, props) => {
    return props.isOpen;
  })
);
