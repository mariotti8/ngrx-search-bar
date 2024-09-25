// src/app/store/effects/search.effects.ts

import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as SearchActions from './search.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Injectable()
export class SearchEffects {
  search$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SearchActions.search),
      switchMap(({ categoryId }) =>
        this.searchService.search(categoryId).pipe(
          map((category) => SearchActions.searchSuccess({ category })),
          catchError((error) => of(SearchActions.searchFailure({ error }))),
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
  ) {}
}
