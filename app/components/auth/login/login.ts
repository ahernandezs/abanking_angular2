import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'app/components/auth/login/login.html',
    styleUrls: ['app/components/auth/login/login.css']
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
		
	}
}
