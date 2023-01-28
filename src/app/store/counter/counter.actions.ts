import { createAction } from '@ngrx/store';

//las acciones son unicas y no deben repetirse

export const increment = createAction('[COUNTER] INCREMENT VALUE');
export const decrease = createAction('[COUNTER] DECREASE VALUE');
