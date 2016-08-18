import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { ImagesLoginComponent } from '../../share/images-login/images-login.component';

@Component({
    templateUrl: 'app/components/auth/unlockpwd/unlockpwd.component.html',
    styleUrls: ['app/components/auth/unlockpwd/unlockpwd.component.css'],
	directives: [
        ROUTER_DIRECTIVES,
        ImagesLoginComponent
    ]
})

export class UnlockPwdComponent {

	/**
	 * Nested component, child of AuthComponent. This component and its siblings require the
	 * ActivatedRoute and Router constructor parameters.
	 */
	constructor(private route: ActivatedRoute, private router: Router) { }
}
