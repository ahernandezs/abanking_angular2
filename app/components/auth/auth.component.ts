import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { FooterComponent } from '../share/footer/footer.component';

@Component({
    templateUrl: 'app/components/auth/auth.component.html',
    styleUrls: ['app/components/auth/auth.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FooterComponent
    ]
})
export class AuthComponent {
	
	/**
	 * Class constructor. As this is the Container component for all the authentication children components
	 * it does only require Router as a constructor parameter.
	 */
	constructor(private router: Router) { }
}
