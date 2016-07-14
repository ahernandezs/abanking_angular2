import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'investments',
    templateUrl: 'app/components/home/investments/investments.html',
    styleUrls: ['app/components/home/investments/investments.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class InvestmentsComponent { }
