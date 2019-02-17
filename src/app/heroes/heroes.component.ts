import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes: Hero[] = [
    {
      id: 1,
      name: 'Name 1'
    },
    {
      id: 2,
      name: 'Name 2'
    },
    {
      id: 3,
      name: 'Name 3'
    },
  ];
  selectedHero: Hero;
	
  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  showDetail(hero: Hero): void {
    this.selectedHero = hero;
  }

}
