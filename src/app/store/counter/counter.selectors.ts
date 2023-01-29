import { createSelector } from '@ngrx/store';
import { AppState } from '../app.reducer';

export const counterStateSelector = (appState: AppState) =>
  appState.counterState;
export const counterStateValueSelector = createSelector(
  counterStateSelector,
  (counterState) => counterState.value
);
