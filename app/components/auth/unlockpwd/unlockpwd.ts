import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'unlockpwd',
    templateUrl: 'app/components/auth/unlockpwd/unlockpwd.html',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        small span{
            color: #e64500;
        }
        .container-fluid div div div:hover{
            border: 2px solid #e64500;
        }
        .space{
            margin-bottom: 10px;
        }
    `]
})

export class UnlockPwdComponent { }