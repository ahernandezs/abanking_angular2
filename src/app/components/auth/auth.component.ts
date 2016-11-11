import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'auth',
	templateUrl: './auth.component.html'
})
export class AuthComponent {
	private myUrl:any;

	constructor(private route: ActivatedRoute) {
		this.route.url.subscribe(
			(data: any) => {
				for (let i of data) {
					this.myUrl = i.path;
				}
			},
			(error: any) => console.debug("Error getting the path", error));
	}

	/**
	 * Event handler for changing the current view.
	 * @param view String
	 */
	changeViewHandler(view: String) {
		this.myUrl = view;
	}
}
