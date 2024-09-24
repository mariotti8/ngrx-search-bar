// src/app/store/selectors/search.selectors.ts

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { SearchState } from '../state.model';

export const selectSearchState = createFeatureSelector<SearchState>('search');

export const selectSearchQuery = createSelector(
  selectSearchState,
  (state: SearchState) => state.category
);

export const selectError = createSelector(
  selectSearchState,
  (state: SearchState) => state.error
);
