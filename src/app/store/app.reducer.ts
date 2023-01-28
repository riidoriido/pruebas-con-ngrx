import { ActionReducerMap } from '@ngrx/store';
import { counterReducer, CounterState } from './counter/counter.reducer';

export interface AppState {
  counterState: CounterState;
}

export const appReducer: ActionReducerMap<AppState> = {
  counterState: counterReducer,
};
