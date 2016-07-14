import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AuthComponent } from './components/auth/auth';
import { HomeComponent } from './components/home/home';

@Component({
    selector: 'abanking',
    directives: [ROUTER_DIRECTIVES],
    template: `<router-outlet></router-outlet>`
})

@RouteConfig([
    { path: '/home/...',          name: 'Auth',      component: AuthComponent },
    { path: '/...',     name: 'Home',      component: HomeComponent,      useAsDefault: true }
])

class RootComponent {}

bootstrap(RootComponent, [ROUTER_PROVIDERS]);
