import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { AccountsComponent } from './accounts/accounts';
import { InvestmentsComponent } from './investments/investments';
import { TaxesComponent } from './taxes/taxes';
import NavbarComponent from './navbar/navbar';
import FooterComponent from '../share/footer/footer';

@Component({
    selector: 'home',
    template: `
        <navbar></navbar>

        <div class="container">
            <router-outlet></router-outlet>
        </div>

        <footer></footer>`,
    styles: [`
        .container{
            padding-top: 25px;
            padding-bottom: 100px;
            min-height: -moz-calc(100% - 74px);
            min-height: -webkit-calc(100% - 74px);
            min-height: -o-calc(100% - 74px);
            min-height: calc(100% - 74px);
            height: auto !important;
            height: 100%;
            margin: 0 auto -35px;
        }
        @media (max-width: 37em) {
            .container{
                margin: 0 auto -75px;
            }
        }
        @media (max-width: 33.9em) {
            .container{
                min-height: -moz-calc(100% - 54px);
                min-height: -webkit-calc(100% - 54px);
                min-height: -o-calc(100% - 54px);
                min-height: calc(100% - 54px);
            }
        }
    `],
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
