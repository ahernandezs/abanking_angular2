import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'dashboard/heroes', component: HeroesComponent },
	{ path: 'dashboard/detail/:id', component: HeroDetailComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class DashboardRoutingModule { }
