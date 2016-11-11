import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'login',
	template: `
		<h1>{{title}}</h1>
		<a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
		<a routerLink="/auth/register" routerLinkActive="active">Register</a>
		<a (click)="changeView('unlock')" routerLinkActive="active">Unlock</a>
	`
})
export class LoginComponent {
	title: String = 'Login';

	/**
	 * This event element will help to change the current view in the parent element <auth.component>.
	 */
	@Output() newView: EventEmitter<String> = new EventEmitter();

	/**
	 * This event is emitted to the parent element <auth.component>.
	 */
	changeView(view: String): void {
		this.newView.emit(view);
	}
}
