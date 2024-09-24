// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { SearchModule } from './pages/search/search.module';
import { provideRouter, RouterModule, RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { reducers } from './store/reducers';
import { provideStoreDevtools, StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SearchResultsModule } from './pages/search-results/search-results.module';
import { appRoutes } from './app.routes';
import { EffectsModule } from '@ngrx/effects';
import { SuggestionsEffects } from './store/suggestions/suggestions.effects';
import { SearchEffects } from './store/search/search.effects';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([SuggestionsEffects, SearchEffects]),
    /*StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false,
    }),*/
    SearchModule,
    SearchResultsModule,
    HeaderComponent
  ],
  providers: [
    provideRouter(appRoutes),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: false, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true // If set to true, the connection is established within the Angular zone
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }