import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from '../share/footer/footer.component';

@Component({
	templateUrl: 'app/components/home/home.component.html',
	styleUrls: ['app/components/home/home.component.css'],
	directives: [
		ROUTER_DIRECTIVES,
		NavbarComponent,
		FooterComponent
	]
})
export class HomeComponent {

	/**
	 * Class constructor. As this is the Container component for all the home children components
	 * it does only require Router as a constructor parameter.
	 */
	constructor(private router: Router) { }
}
