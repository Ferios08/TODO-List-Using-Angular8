import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Card } from '../models/card';
import { finalize } from 'rxjs/operators';


const baseUrl = `${environment.apiUrl}/api/cards`;
@Injectable({
  providedIn: 'root'
})

export class CardsService {

  constructor(private http: HttpClient) { }
  add(card: Card) {
    return this.http.post(`${baseUrl}/`, card);
  }
  getAll() {
    return this.http.get<Card[]>(baseUrl);
  }

  delete(id: string) {
    return this.http.delete(`${baseUrl}/${id}`)
      .pipe(finalize(() => {

      }));
  }

}