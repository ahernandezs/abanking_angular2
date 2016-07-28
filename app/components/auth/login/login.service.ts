import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { Api } from '../../api.interface';

/**
 * Login services. This service includes all the authentication methods.
 */
@Injectable()
export class LoginService extends Api {

	/**
	 * All the services must inject ´Http´.
	 */
	constructor(private _http: Http) {
		super();
	}

	/**
	 * @param username number
	 * @return data json { client_name: '', state: '', images: []}
	 */
	checkUser(username: number): Observable<Object[]> {
		return this._http.get(this._apiUrl.checkuser, { headers : this.headers })
			.map((response: Response) => <Object[]>response.json())
			.do(data => this.headers = (new Headers( {'X-AUTH-TOKEN' : data['X-AUTH-TOKEN']} )) )
			.catch(this.handleError);
	}

	/**
	 * Error handler for this service. 
	 * It calls the global ErrorService to get the proper error message.
	 * @param error Response the error object received from the middleware.
	 * @returns Observable with the error message.
	 */
	private handleError(error: Response) {
		console.error( error );
		return Observable.throw(error.json().error || 'Server error');
	}
}
