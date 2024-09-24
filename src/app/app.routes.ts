import { Routes } from '@angular/router';
import { ROUTES_MAP } from './routes.url';
import { SearchResultsComponent } from './pages/search-results/search-results.component';
import { SearchComponent } from './pages/search/search.component';

export const appRoutes: Routes = [
    { path: ROUTES_MAP.searchResults, component: SearchResultsComponent },
    { path: ROUTES_MAP.search, component: SearchComponent },
    { path: '**', component: SearchComponent }
];
