import { createReducer, on } from '@ngrx/store';

import * as AppActions from '../actions/app.actions';

export const InitialState = {
  isMobileMenuOpen: false,
  isMobileSignInMenuOpen: false,
  currentScreenSize: '',
  menuIsOpen: false,
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

export const ScreenSizeReducer = createReducer(
  InitialState,
  on(AppActions.setScreenSize, (state, props) => ({
    ...state,
    currentScreenSize: props.screenSize,
  }))
);

// For the Personal and Business pages the navigation on desktop view
export const DesktopInnerNavigationReducer = createReducer(
  InitialState,
  on(AppActions.setDesktopInnerNavIsOpen, (state, props) => ({
    ...state,
    menuIsOpen: props.menuIsOpen,
  }))
);
