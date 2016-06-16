import { Component } from '@angular/core';

import { LoginComponent } from 'app/components/auth/login/login';
import { ImageComponent } from 'app/components/auth/image/image';
import { UnblockComponent } from 'app/components/auth/unblock/unblock';
import { UnblockpwdComponent } from 'app/components/auth/unblockpwd/unblockpwd';

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
