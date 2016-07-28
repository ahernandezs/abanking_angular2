import { Headers } from '@angular/http';

/**
 * Default class for consuming the middleware services, all services `MUST` extend this class.
 */
export class Api {

	/**
	 * Default required headers for the services.
	 * The only value to be set on runtime is <X-AUTH-TOKEN>.
	 */
	private _headers = new Headers({
		'X-BANK-TOKEN'    : '0',
		'X-AUTH-TOKEN'    : '',
		'X-CLIENT-TYPE'   : 'WEB',
		'X-CLIENT-VERSION': '0.0.1'
	});

	/**
	 * URL for consuming the middleware services.
	 * It will be updated later with the real URL, this is early-development purposes.
	 */
	protected _apiUrl = {
		checkuser: 'api/login/checkuser.json'
	};

	get headers(): Headers {
		return this._headers;
	}

	set headers(authToken: Headers) {
		this._headers.delete('X-AUTH-TOKEN');
		this._headers.append('X-AUTH-TOKEN', authToken.get('X-AUTH-TOKEN'));
	}
}