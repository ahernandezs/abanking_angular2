import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Http, HTTP_PROVIDERS } from '@angular/http';

import { LoginService } from './login.service';

/**
 * Login component. It does only include the form to validate the received user.
 */
@Component({
    templateUrl: 'app/components/auth/login/login.component.html',
    styleUrls: ['app/components/auth/login/login.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [LoginService]
})
export class LoginComponent {

	public username: number;
	public images: Object[];
	public errorMessage: string;

	/**
	 * Nested component, child of AuthComponent. This component and its siblings require the
	 * ActivatedRoute and Router constructor parameters.
	 */
	constructor(private route: ActivatedRoute, 
				private router: Router,
				private _loginService: LoginService) { }

	/**
	 * Send the username to the middleware, if it is a valid username then receives the 
	 * images in order to continue the login flow changing the view.
	 * @returns images images[]
	 * @return error <any>error
	 */
	onCheckUser(): void {
		this._loginService.checkUser(this.username)
			.subscribe(
				images => ( this.images = images, this.router.navigate(['/auth/image', {images: images}]) ),
				error => this.errorMessage = <any>error
			);
	}
}
