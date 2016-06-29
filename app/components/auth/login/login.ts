import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'login',
    templateUrl: 'app/components/auth/login/login.html',
    directives: [ROUTER_DIRECTIVES],
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
        .container-logs {
            width: 225px;
            height: 39px;
            margin: 0 auto;
        }
        div.apple, div.google{
            cursor: pointer;
            background-size: cover;
            width: 110px;
            height: 38px;
            display: inline-block;
        }
        .apple {
            background: url("app/assets/images/logo-apple-store.svg");
            background-size: cover;
        }
        .google{
            background: url("app/assets/images/logo-google-play.svg");
            background-size: cover;
        }
    `]
})

export class LoginComponent { }
