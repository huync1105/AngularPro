import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaiSanService {

  private API = 'https://62447b2b3da3ac772b1057dd.mockapi.io/person';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  GetListPerSons(): Observable<any[]> {
    return this.http.get<any[]>(this.API).pipe(
      tap(_=>{}),
      catchError(err => of())
    )
  }
}

