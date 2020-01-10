import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  readonly ROOT_URL = 'http://127.0.0.1:8000/api/search';
  constructor(private http: HttpClient) { }

  searchPosts(query: string) {
    return this.http.get<string[]>(`${this.ROOT_URL}/${query}`)
      .toPromise()
      .then(res => res)
      .catch(err => err);
  }
}
