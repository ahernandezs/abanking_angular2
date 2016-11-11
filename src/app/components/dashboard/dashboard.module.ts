import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './hero/heroes.component';
import { HeroDetailComponent } from './hero/hero-detail.component';

import { HeroService } from '../../api/services/hero.service';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		DashboardRoutingModule
	],
	declarations: [
		DashboardComponent,
		HeroesComponent,
		HeroDetailComponent
	],
	providers: [
		HeroService
	]
})
export class DashboardModule { }
