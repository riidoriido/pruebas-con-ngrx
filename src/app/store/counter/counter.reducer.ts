import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { decrease, increment, reset } from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (oldState) => {
    const newState = produce(oldState, (draft) => {
      draft.value++;
    });
    return newState;
  }),
  on(decrease, (oldState) => {
    const newState = produce(oldState, (draft) => {
      draft.value--;
    });
    return newState;
  }),
  on(reset, () => {
    return initialState;
  })
);
