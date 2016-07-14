import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { AuthComponent } from './components/auth/auth';
import { HomeComponent } from './components/home/home';

@Component({
    selector: 'abanking',
    template: `<router-outlet></router-outlet>`,
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    { path: '/...',          name: 'Auth',      component: AuthComponent,      useAsDefault: true },
    { path: '/home/...',     name: 'Home',      component: HomeComponent }
])

class RootComponent {}

bootstrap(RootComponent, [ROUTER_PROVIDERS]);
