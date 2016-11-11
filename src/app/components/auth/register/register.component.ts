import { Component } from '@angular/core';

@Component({
	selector: 'register',
	template: `
		<h1>{{title}}</h1>
		<a routerLink="/auth" routerLinkActive="active">Login</a>
	`
})
export class RegisterComponent {
	title:String = 'Register';
}
