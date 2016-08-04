import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import { TransactionsComponent } from '../transactions/transactions.component';
import { DetailComponent } from '../detail/detail.component';
import { DetailTransactionComponent } from '../detailTransaction/detailTransaction.component';
import { CardPaymentComponent } from '../cardPayment/cardPayment.component';

@Component({
    templateUrl: 'app/components/home/accountDetail/accountDetail.component.html',
    styleUrls: ['app/components/home/accountDetail/accountDetail.component.css'],
    directives: [
        ROUTER_DIRECTIVES,
        TransactionsComponent,
        DetailComponent,
        DetailTransactionComponent,
        CardPaymentComponent
    ]
})

export class AccountDetailComponent { }
