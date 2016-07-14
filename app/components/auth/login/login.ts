import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'login',
    templateUrl: 'app/components/auth/login/login.html',
    styleUrls: ['app/components/auth/login/login.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent { }
