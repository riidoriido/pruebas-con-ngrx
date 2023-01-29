import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { change } from './boolean.actions';

export interface BooleanState {
  property: boolean;
}

const initialState: BooleanState = {
  property: false,
};

export const booleanReducer = createReducer(
  initialState,
  on(change, (oldState) => {
    if ((oldState.property = false)) return oldState;
    return {
      ...oldState,
      property: (oldState.property = true),
    };
  })
);
