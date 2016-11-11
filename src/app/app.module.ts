import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthModule } from './components/auth/auth.module';
import { DashboardModule } from './components/dashboard/dashboard.module';

import { PageNotFoundComponent } from './components/404/pageNotFound.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AuthModule,
		DashboardModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		PageNotFoundComponent
	],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
