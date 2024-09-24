import { ActionReducerMap } from "@ngrx/store";
import { AppState } from "./state.model";
import { searchReducer } from "./search/search.reducers";
import { suggestionsReducer } from "./suggestions/suggestions.reducers";

export const reducers: ActionReducerMap<AppState> = {
    search: searchReducer,
    suggestions: suggestionsReducer,
}