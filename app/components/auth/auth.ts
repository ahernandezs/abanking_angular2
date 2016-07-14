import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { LoginComponent } from './login/login';
import { ImageComponent } from './image/image';
import { UnlockComponent } from './unlock/unlock';
import { UnlockPwdComponent } from './unlockpwd/unlockpwd';
import FooterComponent from '../share/footer/footer';

@Component({
    selector: 'auth',
    template: `
        <div class="dark-line">
            <div class="line-head"></div>
        </div>

        <div class="container">
            <router-outlet></router-outlet>
        </div>

        <footer></footer>`,
    styles: [`
        .container{
            padding-top: 25px;
            padding-bottom: 100px;
            min-height: 100%;
            height: auto !important;
            height: 100%;
            margin: 0 auto -35px;
        }
        @media (max-width: 37em) {
            .container{
                margin: 0 auto -75px;
            }
        }
    `],
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
