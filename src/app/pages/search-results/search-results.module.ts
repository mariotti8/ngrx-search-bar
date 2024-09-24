import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchResultsComponent } from './search-results.component';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from '../../store/search/search.effects';

@NgModule({
  declarations: [SearchResultsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    SearchResultsComponent
  ],
  providers: [SearchService]
})
export class SearchResultsModule {}