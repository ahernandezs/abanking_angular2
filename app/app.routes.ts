import { provideRouter, RouterConfig } from '@angular/router';

import { AuthRoutes } from './components/auth/auth.routes';
import { HomeRoutes } from './components/home/home.routes';

export const routes: RouterConfig = [
	{ path: '', redirectTo: '/auth', pathMatch: 'full' },
	...AuthRoutes,
	...HomeRoutes
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];
