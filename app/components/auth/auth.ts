import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { LoginComponent } from './login/login';
import { ImageComponent } from './image/image';
import { UnlockComponent } from './unlock/unlock';
import { UnlockPwdComponent } from './unlockpwd/unlockpwd';
import FooterComponent from '../share/footer/footer';

@Component({
    selector: 'auth',
    templateUrl: 'app/components/auth/auth.html',
    styleUrls: ['app/components/auth/auth.css'],
    directives: [
        ROUTER_DIRECTIVES,
        FooterComponent
    ]
})

@RouteConfig([
    { path: '',           name: 'Login',     component: LoginComponent, useAsDefault: true },
    { path: '/image',     name: 'Image',     component: ImageComponent },
    { path: '/unlock',    name: 'Unlock',    component: UnlockComponent },
    { path: '/unlockpwd', name: 'UnlockPwd', component: UnlockPwdComponent }
])

export class AuthComponent { }
