import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'navbar',
    templateUrl: 'app/components/home/navbar/navbar.component.html',
    styleUrls: ['app/components/home/navbar/navbar.component.css'],
	directives: [ROUTER_DIRECTIVES]
})

export class NavbarComponent { }
