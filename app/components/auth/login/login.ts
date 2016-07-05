import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'login',
    templateUrl: 'app/components/auth/login/login.html',
    directives: [ROUTER_DIRECTIVES],
    styles: [`        
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
            background-size: cover;
        }
        .apple {
            background: url("../app/assets/images/logo-apple-store.svg");
        }
        .google{
            background: url("../app/assets/images/logo-google-play.svg");
        }
    `]
})

export class LoginComponent { }
