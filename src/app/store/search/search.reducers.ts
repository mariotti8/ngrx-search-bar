// src/app/store/reducers/search.reducer.ts

import { createReducer, on } from '@ngrx/store';
import * as SearchActions from './search.actions';
import { SearchState } from '../state.model';

export const initialState: SearchState = {
  category: undefined,
  error: null,
};

export const searchReducer = createReducer(
  initialState,
  on(SearchActions.searchSuccess, (state, { category }) => ({
    ...state,
    category,
  })),
  on(SearchActions.searchFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
