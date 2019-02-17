import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
