import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../../api/data/hero';
import { HeroService } from '../../api/services/hero.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

	heroes: Hero[] = [];

	constructor(
		private router: Router,
		private heroService: HeroService) { }

	ngOnInit(): void {
		this.heroService.getHeroes()
		.then(heroes => this.heroes = heroes.slice(1, 5));
	}

	gotoDetail(hero: Hero): void {
		let link = ['/dashboard/detail', hero.id];
		this.router.navigate(link);
	}

}