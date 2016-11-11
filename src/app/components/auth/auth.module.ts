import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UnlockComponent } from './unlock/unlock.component';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		AuthRoutingModule
	],
	declarations: [
		AuthComponent,
		LoginComponent,
		RegisterComponent,
		UnlockComponent
	]
})
export class AuthModule { }
