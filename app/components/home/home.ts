import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { ProductsComponent } from './products/products';

@Component({
    selector: 'home',
    template: `<router-outlet></router-outlet>`,
    styles: [`
        .container{
            min-height: 100%;
            height: auto !important;
            height: 100%;
            margin: 0 auto -35px;
        }
    `],
    directives: [
        ROUTER_DIRECTIVES
    ]
})

@RouteConfig([
    { path: '',           name: 'Products',     component: ProductsComponent, useAsDefault: true }
])

export class HomeComponent { }
