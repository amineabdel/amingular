import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Overtreding } from './overtreding';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {

  private url = "http://localhost:4200/assets/overtredingen.json";

  constructor(private http: HttpClient) {
  }

  getAllOvertreding(): Observable<Overtreding[]> {
    return this.http.get<Overtreding[]>(this.url);
  }
}
