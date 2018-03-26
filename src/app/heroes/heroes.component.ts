import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heroes: Hero[];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.bringHeroes();
    //  this.oldHeroes();
  }

  bringHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(itmes => this.heroes = itmes);
  }

  oldHeroes(): void {
    this.heroes = this.heroService.getHeroes1();
  }

  onSelect(h: Hero): void {
    this.selectedHero = h;
  }
}
