import { createReducer, on } from '@ngrx/store';
import produce from 'immer';
import { increment } from './counter.actions';

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(increment, (oldState) => {
    // const stateCopy = {...oldState}
    // return{
    //   ...oldState,
    //   value: oldState + 1,
    // }
    console.log('Here!');
    const newState = produce(oldState, (draft) => {
      draft.value++;
    });
    return newState;
  })
);
