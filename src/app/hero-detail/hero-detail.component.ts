import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
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

  constructor(
    private route: ActivatedRoute,
    // private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
  	this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.hero = this.heroes[id - 1];
  }

  goBack(): void {
    this.location.back();
  }
}
