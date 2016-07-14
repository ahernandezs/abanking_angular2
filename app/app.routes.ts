import { provideRouter, RouterConfig } from '@angular/router';

import { AuthComponent } from './components/auth/auth.component';
//import { HomeRoutes } from './components/home/home.routes';

export const routes: RouterConfig = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'login', component: AuthComponent }
];

export const APP_ROUTER_PROVIDERS = [
	provideRouter(routes)
];