import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'unlockpwd',
    templateUrl: 'app/components/auth/unlockpwd/unlockpwd.component.html',
    styleUrls: ['app/components/auth/unlockpwd/unlockpwd.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class UnlockPwdComponent {

	/**
	 * Nested component, child of AuthComponent. This component and its siblings require the
	 * ActivatedRoute and Router constructor parameters.
	 */
	constructor(private route: ActivatedRoute, private router: Router) { }
}
