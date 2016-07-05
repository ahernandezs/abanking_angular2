import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'image',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/components/auth/image/image.html',
    styles: [`
        small span{
            color: #e64500;
        }
        .container-fluid div div div:hover{
            border: 2px solid #e64500;
        }
        .space{
            margin-bottom: 10px;
        }
    `]
})

export class ImageComponent { }
