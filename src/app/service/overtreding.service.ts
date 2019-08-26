import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Overtreding } from './overtreding';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OvertredingService {

  overtredingen: Overtreding[] = [];
  private contentHeaders: HttpHeaders;

  private url = "http://localhost:4200/assets/overtredingen.json";
  //private url = "/assets/overtredingen.json";
  constructor(private http: HttpClient) {
    this.contentHeaders = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
  }

  getAllOvertreding(): Observable<Overtreding[]> {
    return this.http.get<Overtreding[]>(this.url);
  }

  searchOvertredingstraat(): Observable<Overtreding[]> {
    return this.http.get<Overtreding[]>(this.url);
    //return this.http.post<Overtreding>(this.url, "naam: " + naam, { headers: this.contentHeaders });
  }

  // searchProduct(name: string): Observable<Product> {
  //   let url = `${this.productsServiceURI}/search`;

  //   return this.http.post<Product>(url, `name=${name}`,
  //     { headers: this.contentHeaders });
  // }

  // findPokemons(date1: string, date2: string): Pokemon[] {
  //   let gevondenPokemons: Pokemon[] = [];
  //   for (let i = 0; i < this.pokemons.length; i++) {
  //     console.log('pokemon owned: ' + this.pokemons[i].owned);
  //     if (this.pokemons[i].owned >= date1 && this.pokemons[i].owned <= date2) {
  //       //console.log(this.jpok[i]);
  //       gevondenPokemons.push(this.pokemons[i]);
  //       //console.log(gevondenPokemons);
  //     }
  //   }
  //   localStorage.setItem(date1 + " |+| " + date2, JSON.stringify(gevondenPokemons));
  //   return gevondenPokemons;
  // }
}
