import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'unlock',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/auth/unlock/unlock.html',
    styles: [`
        .space{
            margin-bottom: 10px;
        }
    `]
})

export class UnlockComponent { }