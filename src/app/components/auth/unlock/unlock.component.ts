import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'unlock',
	template: `
		<h1>{{title}}</h1>
		<a (click)="changeView('auth')" routerLinkActive="active">Login</a>
	`
})
export class UnlockComponent {
	title: String = 'Unlock';

	/**
	 * This event element will help to go back in the parent element <auth.component>.
	 */
	@Output() toLogin: EventEmitter<String> = new EventEmitter();

	/**
	 * This event is emitted to the parent element <auth.component>.
	 */
	changeView(view: String): void {
		this.toLogin.emit(view);
	}
}
