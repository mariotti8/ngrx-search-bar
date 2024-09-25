// src/app/components/search/search.component.ts

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../store/state.model';
import { Category, Store as EdenredStore } from '../../models/search.models';
import { selectSearchQuery } from '../../store/search/search.selectors';
import { ActivatedRoute } from '@angular/router';
import { search } from '../../store/search/search.actions';
import { selectSuggestionResults } from '../../store/suggestions/suggestions.selectors';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchResultsComponent {

  result$: Observable<Category | undefined> = this.store.select(selectSearchQuery);

  constructor(private store: Store<AppState>, private route: ActivatedRoute) {
    const categoryId = this.route.snapshot.queryParamMap.get('id');
    this.store.dispatch(search({ categoryId: Number(categoryId) }))
  }
}