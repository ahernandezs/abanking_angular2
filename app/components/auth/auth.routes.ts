import { RouterConfig } from '@angular/router';

import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ImageComponent } from './image/image.component';
import { UnlockComponent } from './unlock/unlock.component';
import { UnlockPwdComponent } from './unlockpwd/unlockpwd.component';

export const AuthRoutes: RouterConfig = [
	{
		path: 'auth',
		component: AuthComponent,
		children: [
			{ path: '', component: LoginComponent },
			{ path: 'image', component: ImageComponent, data: { images: [] } },
			{ path: 'unlock', component: UnlockComponent },
			{ path: 'unlockpwd', component: UnlockPwdComponent }			
		]
	}
];