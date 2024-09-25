import { Category, Store } from "../models/search.models";

export interface AppState {
  search: SearchState;
  suggestions: SuggestionsState
}

export interface SearchState {
  category: Category | undefined;
  error: any;
}

export interface SuggestionsState {
  query: string;
  results: { category: Category[], stores: Store[] };
  error: any;
}
