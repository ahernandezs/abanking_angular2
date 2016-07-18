import { Component } from '@angular/core';
import { Router, ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'image',
    templateUrl: 'app/components/auth/image/image.component.html',
    styleUrls: ['app/components/auth/image/image.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class ImageComponent {
	
	/**
	 * Nested component, child of AuthComponent. This component and its siblings require the
	 * ActivatedRoute and Router constructor parameters.
	 */
	constructor(private route: ActivatedRoute, private router: Router) { }
}
