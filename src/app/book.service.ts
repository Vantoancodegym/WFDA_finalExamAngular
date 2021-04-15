import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import {IBook} from './ibook';
const URL_BACKEND = environment.api_url;
@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }
  getAllBooks(): Observable<IBook[]> {
    return this.httpClient.get<IBook[]>(URL_BACKEND);
  }
  getBookById(id: number): Observable<IBook>{
    return this.httpClient.get<IBook>(URL_BACKEND + id);
  }
  createNewBook(book: IBook): Observable<any>{
    return this.httpClient.post(URL_BACKEND, book);
  }
  editBook(id: number, book: IBook): Observable<any>{
    return this.httpClient.put(URL_BACKEND + id, book);
  }
  deleteBook(id: number): Observable<any>{
    return this.httpClient.delete(URL_BACKEND + id);
  }
}
