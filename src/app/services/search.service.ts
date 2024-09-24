// src/app/services/search.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Category } from '../models/search.models';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) { }

  getSuggestions(query: string): Observable<Category[]> {
    const result = category.filter(category => query && category.stores.find((a) => a.toLowerCase().includes(query.toLowerCase())))
    return of(result);
  }

  search(categoryId: number | undefined): Observable<Category | undefined> {
    const result = category.find(category => categoryId && category.id === categoryId)
    console.log({ result });

    return of(result);
  }
}

const category: Category[] = [
  {
    id: 1,
    name: "Supermercati",
    stores: [
      "Esselunga",
      "Conad"
    ]
  },
  {
    id: 2,
    name: "Dentisti",
    stores: [
      "Dr. Rossi",
      "Dr. Bianchi",
    ]
  }
]
