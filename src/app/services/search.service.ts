// src/app/services/search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category, Store } from '../models/search.models';

@Injectable()
export class SearchService {
  constructor() { }

  getSuggestions(query: string): Observable<{ category: Category[], stores: Store[] }> {
    let resultStores: Store[] = [];
    const resultCategory = category.filter(category => query && category.name.toLowerCase().includes(query.toLowerCase()))
    category.forEach(category => category.stores.forEach(store => query && store.name.toLowerCase().includes(query.toLowerCase()) && resultStores.push(store)));

    return of({ category: resultCategory, stores: resultStores });
  }

  search(categoryId: number | undefined): Observable<Category | undefined> {
    const result = category.find(category => categoryId && category.id === categoryId);
    return of(result);
  }
}

const category: Category[] = [
  {
    id: 1,
    name: "Supermercati",
    stores: [
      {
        id: 123,
        name: "Esselunga",
      },
      {
        id: 231,
        name: "Conad",
      },
    ]
  },
  {
    id: 2,
    name: "Dentisti",
    stores: [
      {
        id: 13,
        name: "Dr. Rossi",
      },
      {
        id: 91,
        name: "Dr. Bianchi",
      }
    ]
  }
]
