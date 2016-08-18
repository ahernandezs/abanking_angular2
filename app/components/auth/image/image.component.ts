import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

import { ImagesLoginComponent } from '../../share/images-login/images-login.component';

@Component({
    templateUrl: 'app/components/auth/image/image.component.html',
    styleUrls: ['app/components/auth/image/image.component.css'],
	directives: [
        ROUTER_DIRECTIVES,
        ImagesLoginComponent
    ]
})

export class ImageComponent {
	sub: any;

	/**
	 * Nested component, child of AuthComponent. This component and its siblings require the
	 * ActivatedRoute and Router constructor parameters.
	 */
	constructor(private route: ActivatedRoute, private router: Router) {
		//console.info( route.snapshot.data )
	}

	ngOnInit() {
		this.sub = this.route.data.subscribe(v => console.log(v));
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
