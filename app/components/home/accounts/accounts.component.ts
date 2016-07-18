import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { PublicityComponent } from '../../share/publicity/publicity.component';
import { PublicitybarComponent } from '../../share/publicitybar/publicitybar.component';

@Component({
    templateUrl: 'app/components/home/accounts/accounts.component.html',
    styleUrls: ['app/components/home/accounts/accounts.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        PublicityComponent,
        PublicitybarComponent
    ]
})

export class AccountsComponent { }
