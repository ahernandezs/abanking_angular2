import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import PublicityComponent from '../../share/publicity/publicity';
import PublicitybarComponent from '../../share/publicitybar/publicitybar';

@Component({
    selector: 'accounts',
    templateUrl: 'app/components/home/accounts/accounts.html',
    styleUrls: ['app/components/home/accounts/accounts.css'],
    directives: [
        ROUTER_DIRECTIVES,
        PublicityComponent,
        PublicitybarComponent
    ]
})

export class AccountsComponent { }
