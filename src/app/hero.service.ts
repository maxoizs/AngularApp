import { Injectable } from '@angular/core';

import { Hero } from './heroes/hero';
import { HEROES } from './heroes/mock-heroes';
import {MessageService} from './message.service';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class HeroService {

  constructor(private _messageService:MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this._messageService.add("HeroService: Fetched heros");
    return of(HEROES);
  }

  getHeroes1():Hero[]{
    return HEROES;
  }
}
