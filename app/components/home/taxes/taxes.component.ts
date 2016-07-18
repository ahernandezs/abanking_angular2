import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/home/taxes/taxes.component.html',
    styleUrls: ['app/components/home/taxes/taxes.component.css']
})

export class TaxesComponent { }
