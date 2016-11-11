import { Component } from '@angular/core';

@Component({
	selector: 'page-not-found',
	template: `
		<h1>{{title}}</h1>
		<a routerLink="/auth" routerLinkActive="active">Login</a>
	`
})
export class PageNotFoundComponent {
	title:String = '404 Page Not Found';
}
