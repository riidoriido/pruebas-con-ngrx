import { ActionReducerMap } from '@ngrx/store';
import { booleanReducer, BooleanState } from './boolean/boolean.reducer';
import { counterReducer, CounterState } from './counter/counter.reducer';

export interface AppState {
  counterState: CounterState;
  booleanState: BooleanState;
}

export const appReducer: ActionReducerMap<AppState> = {
  counterState: counterReducer,
  booleanState: booleanReducer,
};
