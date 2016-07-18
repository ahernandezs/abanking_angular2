import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
	selector: 'login',
    templateUrl: 'app/components/auth/login/login.component.html',
    styleUrls: ['app/components/auth/login/login.component.css'],
	directives: [ROUTER_DIRECTIVES] 
})
export class LoginComponent {

	/**
	 * Nested component, child of AuthComponent. This component and its siblings require the
	 * ActivatedRoute and Router constructor parameters.
	 */
	constructor(private route: ActivatedRoute, private router: Router) { }

	onCancel(): void {
		// TODO: clean the form
	}

	onPreLogin(): void {
		this.router.navigate(['/image']);
	}
}
