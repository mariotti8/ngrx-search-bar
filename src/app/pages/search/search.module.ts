// src/app/app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search.component';
import { SearchService } from '../../services/search.service';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { SuggestionsEffects } from '../../store/suggestions/suggestions.effects';
import { SearchBarComponent } from "../../components/search-bar/search-bar.component";

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    SearchBarComponent
],
  exports: [
    SearchComponent
  ],
  providers: [SearchService]
})
export class SearchModule {}