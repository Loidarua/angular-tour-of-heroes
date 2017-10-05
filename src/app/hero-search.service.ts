import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }           from './hero';

@Injectable()
export class HeroSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Hero[]> {
        //return this.http.get(ApiService.API_URL_BUSCAR_HEROES)
        const url = `${ApiService.API_URL_BUSCAR_HEROES}/?name=${term}`;
        return this.http
                   .get(url)
                   //.get(`api/heroes/?name=${term}`)
                   .map(response => response.json() as Hero[]);
}
}