import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
          // Simulate server latency with 2 second delay
          //setTimeout(() => resolve(this.getHeroes()), 2000);
        }
}
      
       
