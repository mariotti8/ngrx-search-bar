import { createReducer, on } from '@ngrx/store';
import * as SuggestionsActions from './suggestions.actions';
import { SuggestionsState } from '../state.model';

export const initialState: SuggestionsState = {
  query: '',
  results: { category: [], stores: [] },
  error: null,
};

export const suggestionsReducer = createReducer(
  initialState,
  on(SuggestionsActions.suggestions, (state, { query }) => ({
    ...state,
    query,
    error: null,
  })),
  on(SuggestionsActions.suggestionsSuccess, (state, { category, stores }) => ({
    ...state,
    results: { category, stores },
    error: null
  })),
  on(SuggestionsActions.suggestionsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);
