import { Component } from '@angular/core';

import { LoginComponent } from '../auth/login/login';
import { ImageComponent } from '../auth/image/image';
import { UnblockComponent } from '../auth/unblock/unblock';
import { UnblockpwdComponent } from '../auth/unblockpwd/unblockpwd';

@Component({
    selector: 'abanking-content',
    template:
        `<div class="container">
            <abanking-login></abanking-login>
            <!-- <abanking-login></abanking-login> -->
            <!-- <abanking-image></abanking-image> -->
            <!-- <abanking-unblock></abanking-unblock> -->
            <!-- <abanking-unblockpwd></abanking-unblockpwd> -->
        </div>
        `,
    styles: [`
                .container{
                    min-height: 100%;
                	height: auto !important;
                	height: 100%;
                	margin: 0 auto -40px;
                }
            `],
    directives: [LoginComponent,ImageComponent,UnblockComponent,UnblockpwdComponent]
})

export class ContentComponent{ }
