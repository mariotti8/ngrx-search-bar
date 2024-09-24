import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SuggestionsState } from '../state.model';

export const selectSuggestionsState = createFeatureSelector<SuggestionsState>('suggestions');

export const selectSuggestionResults = createSelector(
  selectSuggestionsState,
  (state: SuggestionsState) => state.results
);

export const selectSuggestionsQuery = createSelector(
  selectSuggestionsState,
  (state: SuggestionsState) => state.query
);

export const selectSuggestionsError = createSelector(
  selectSuggestionsState,
  (state: SuggestionsState) => state.error
);
