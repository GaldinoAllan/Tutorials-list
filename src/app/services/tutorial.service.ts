import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Tutorial } from './tutorial';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseUrl = 'http://localhost:3000/tutorials';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(this.baseUrl).pipe(
      catchError(this.errorHandler)
    )
  }

  get(id): Observable<Tutorial> {
    return this.http.get<Tutorial>(`${this.baseUrl}/${id}`);
  }

  create(data): Observable<Tutorial> {
    return this.http.post<Tutorial>(this.baseUrl, data);
  }

  update(id, data): Observable<Tutorial> {
    return this.http.put<Tutorial>(`${this.baseUrl}/${id}`, data);
  }

  delete(id): Observable<Tutorial> {
    return this.http.delete<Tutorial>(`${this.baseUrl}/${id}`);
  }

  deleteAll(): Observable<Tutorial> {
    return this.http.delete<Tutorial>(this.baseUrl);
  }

  findByTitle(title): Observable<Tutorial[]> {
    return this.http.get<Tutorial[]>(`${this.baseUrl}?title=${title}`);
  }

  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`
    }
    return throwError(errorMessage);
  }
}
