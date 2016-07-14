import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { AccountsComponent } from './accounts/accounts';
import { InvestmentsComponent } from './investments/investments';
import { TaxesComponent } from './taxes/taxes';
import NavbarComponent from './navbar/navbar';
import FooterComponent from '../share/footer/footer';

@Component({
    selector: 'home',
    templateUrl: 'app/components/home/home.html',
    styleUrls: ['app/components/home/home.css'],
    directives: [
        ROUTER_DIRECTIVES,
        NavbarComponent,
        FooterComponent
    ]
})

@RouteConfig([
    { path: '',             name: 'Accounts',       component: AccountsComponent,    useAsDefault: true },
    { path: '/investments', name: 'Investments',    component: InvestmentsComponent },
    { path: '/taxes',       name: 'Taxes',          component: TaxesComponent }
])

export class HomeComponent { }
