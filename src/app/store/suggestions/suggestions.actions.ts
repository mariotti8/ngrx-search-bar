// src/app/store/actions/search.actions.ts

import { createAction, props } from '@ngrx/store';
import { Category, Store } from '../../models/search.models';

export const suggestions = createAction(
  '[Suggestions Component] Suggestions',
  props<{ query: string }>()
);

export const suggestionsSuccess = createAction(
  '[Suggestions API] Suggestions Success',
  props<{ category: Category[], stores: Store[]  }>()
);

export const suggestionsFailure = createAction(
  '[Suggestions API] Suggestions Failure',
  props<{ error: any }>()
);
