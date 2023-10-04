import { createReducer, on } from '@ngrx/store';

import * as AppActions from '../actions/app.actions';

export const InitialState = {
  isMobileMenuOpen: false,
  isMobileSignInMenuOpen: false,
};

export const NavbarReducer = createReducer(
  InitialState,
  on(AppActions.setIsMobileMenuOpen, (state, props) => ({
    ...state,
    isMobileMenuOpen: props.isOpen,
  })),
  on(AppActions.setIsMobileSignInMenuOpen, (state, props) => ({
    ...state,
    isMobileSignInMenuOpen: props.isOpen,
  }))
);
