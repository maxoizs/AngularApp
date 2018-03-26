import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { HEROES } from './heroes/mock-heroes';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should be get heroes', inject([HeroService], (service: HeroService) => {
    var items ;
    service.getHeroes().subscribe(x=> this.itmes = x);
    expect(items).toEqual(HEROES);
  }));
});
