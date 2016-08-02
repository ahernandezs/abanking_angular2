import { RouterConfig } from '@angular/router';

import { HomeComponent } from './home.component';
import { AccountsComponent } from './accounts/accounts.component';
import { InvestmentsComponent } from './investments/investments.component';
import { TaxesComponent } from './taxes/taxes.component';
import { AccountDetailComponent } from './accountDetail/accountDetail.component';

export const HomeRoutes: RouterConfig = [
	{
		path: 'home',
		component: HomeComponent,
		children: [
			{ path: '', component: AccountsComponent },
			{ path: 'investments', component: InvestmentsComponent },
			{ path: 'taxes', component: TaxesComponent },
			{ path: 'accountDetail', component: AccountDetailComponent }
		]
	}
];
