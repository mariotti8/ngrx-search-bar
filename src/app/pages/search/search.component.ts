// src/app/components/search/search.component.ts

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AppState } from '../../store/state.model';
import { Category, Store as EdenredStore } from '../../models/search.models';
import { suggestions } from '../../store/suggestions/suggestions.actions';
import { selectSuggestionResults } from '../../store/suggestions/suggestions.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  results$: Observable<{ category: Category[], stores: EdenredStore[] } | undefined> = this.store.select(selectSuggestionResults);
  private searchSubject = new Subject<string>();

  constructor(
    private router: Router,
    private store: Store<AppState>
  ) {
    this.searchSubject.pipe(debounceTime(300)).subscribe((query) => {
      this.store.dispatch(suggestions({ query }));
    });
  }

  onSelectStore(categoryId: number, storeId: number) {
    this.router.navigate(['/store-details'], { queryParams: { storeId, categoryId } })
  }

  onSelectCategory(categoryId: number) {
    this.router.navigate(['/search-results'], { queryParams: { id: categoryId } })
  }

  onInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.searchSubject.next(input.value);
  }
}