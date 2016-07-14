import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'taxes',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/home/taxes/taxes.html',
    styleUrls: ['app/components/home/taxes/taxes.css']
})

export class TaxesComponent { }
