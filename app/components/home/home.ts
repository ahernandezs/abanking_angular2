import { Component } from '@angular/core';
import { RouteConfig, RouterOutlet } from '@angular/router-deprecated';

import { ProductsComponent } from './products/products';

@Component({
    template: `
        <div class="container">
            <router-outlet></router-outlet>
        </div>`,
    styles: [`
        .container{
            min-height: 100%;
            height: auto !important;
            height: 100%;
            margin: 0 auto -35px;
        }
    `]
})

@RouteConfig([
    { path: '', name: 'Products', component: ProductsComponent, useAsDefault: true }
])

export class HomeComponent { }