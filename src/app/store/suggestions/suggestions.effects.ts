// src/app/store/effects/search.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SuggestionsActions from './suggestions.actions';
import { switchMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Injectable()
export class SuggestionsEffects {
  suggestions$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SuggestionsActions.suggestions),
      switchMap(({ query }) =>
        this.searchService.getSuggestions(query).pipe(
          map(({category, stores}) => SuggestionsActions.suggestionsSuccess({ category, stores })),
          catchError((error) => of(SuggestionsActions.suggestionsFailure({ error })))
        )
      )
    )
  );
  
  constructor(
    private actions$: Actions,
    private searchService: SearchService
  ) { }
}
