import { Component, Input, trigger, state, style, transition,animate } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { TransactionsComponent } from '../transactions/transactions.component';
import { DetailComponent } from '../detail/detail.component';


@Component({
    templateUrl: 'app/components/home/prueba/prueba.component.html',
    styleUrls: ['app/components/home/prueba/prueba.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        TransactionsComponent,
        DetailComponent
    ],
    animations: [
        trigger('moduleState', [
            state('inactive',
                style({
                    position: 'static',
                    cursor: 'pointer',
                    width: '0px',
                    height: '0px',
                    borderTop: '8px solid #3f454f',
                    borderBottom: '8px solid #3f454f',
                    borderLeft: '10px solid rgba(255,255,255,.75)'
                    // backgroundColor: 'rgb(176, 237, 27)'
                })
            ),
            state('active',
                style({
                    zIndex: '9999',
                    position: 'fixed',
                    left: '0',
                    bottom: '0',
                    cursor: 'default',
                    width: '100%',
                    height: '100%',
                    borderTop: '0px solid #3f454f',
                    borderBottom: '0px solid #3f454f',
                    borderLeft: '0px solid rgba(255,255,255,.75)',
                    backgroundColor: 'rgb(237, 103, 27)'
                })
            ),
            transition('inactive <=> active', animate('100ms ease-out'))
            // transition('inactive => active', animate('100ms ease-in')),
            // transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})

export class PruebaComponent {
    public state = 'inactive';
    toggleState(){
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
}
