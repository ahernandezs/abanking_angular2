import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    templateUrl: 'app/components/auth/unlock/unlock.component.html',
    styleUrls: ['app/components/auth/unlock/unlock.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class UnlockComponent {
	
	/**
	 * Nested component, child of AuthComponent. This component and its siblings require the
	 * ActivatedRoute and Router constructor parameters.
	 */
	constructor(private route: ActivatedRoute, private router: Router) { }
}
