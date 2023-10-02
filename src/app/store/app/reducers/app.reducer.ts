import { createReducer, on } from '@ngrx/store';
import { setIsMobileMenuOpen } from '../actions/app.actions';

export const isMobileMenuOpen = false;

export const IsMobileMenuOpenReducer = createReducer(
  isMobileMenuOpen,
  on(setIsMobileMenuOpen, (state, props) => {
    return props.isOpen;
  })
);
