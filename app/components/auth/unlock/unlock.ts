import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'unlock',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/auth/unlock/unlock.html',
    styles: [`
        .logo-login{
            background: url("app/assets/images/logo.png");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 50px;
            width: 222px;
            margin: 20px auto 30px auto;
        }
        .card-block > .row{
            margin-top: 20px;
        }
        #unblock .space{
            margin-bottom: 10px;
        }
    `]
})

export class UnlockComponent { }