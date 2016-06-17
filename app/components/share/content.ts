import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES } from '@angular/router-deprecated';


import { LoginComponent } from '../auth/login/login';
import { ImageComponent } from '../auth/image/image';
import { UnblockComponent } from '../auth/unblock/unblock';
import { UnblockpwdComponent } from '../auth/unblockpwd/unblockpwd';

@Component({
    selector: 'abanking-content',
    template:
        `<div class="container">
            <router-outlet></router-outlet>

            <!-- ******************************************* -->
            <nav>
                <a [routerLink]="['Login']">Login</a> |
                <a [routerLink]="['Image']">Image</a> |
                <a [routerLink]="['Unblock']">Unblock</a> |
                <a [routerLink]="['Unblockpwd']">Unblockpwd</a>
            </nav>
            <br><br><br>
            <!-- ******************************************* -->

        </div>
        `,
    styles: [`
                .container{
                    min-height: 100%;
                	height: auto !important;
                	height: 100%;
                	margin: 0 auto -40px;
                }
            `],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/login',      name: 'Login',      component: LoginComponent,      useAsDefault: true},
  {path: '/image',      name: 'Image',      component: ImageComponent},
  {path: '/unblock',    name: 'Unblock',    component: UnblockComponent},
  {path: '/unblockpwd', name: 'Unblockpwd', component: UnblockpwdComponent}
])

export class ContentComponent{ }
