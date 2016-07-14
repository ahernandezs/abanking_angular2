import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_ROUTER_PROVIDERS } from './app.routes';

@Component({
    selector: 'abanking',
    template: `<router-outlet></router-outlet>`,
	directives: [ROUTER_DIRECTIVES]
})

class RootComponent {}

bootstrap(RootComponent, [APP_ROUTER_PROVIDERS]);
