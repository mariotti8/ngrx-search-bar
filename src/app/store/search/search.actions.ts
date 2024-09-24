// src/app/store/actions/search.actions.ts

import { createAction, props } from '@ngrx/store';
import { Category } from '../../models/search.models';

export const search = createAction(
  '[Search Component] Search',
  props<{ categoryId:  number | undefined }>()
);

export const searchSuccess = createAction(
  '[Search API] Search Success',
  props<{ category: Category | undefined }>()
);

export const searchFailure = createAction(
  '[Search API] Search Failure',
  props<{ error: any }>()
);
