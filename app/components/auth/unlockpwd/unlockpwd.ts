import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'unlockpwd',
    templateUrl: 'app/components/auth/unlockpwd/unlockpwd.html',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .logo-login{
            background: url("app/assets/images/logo.png");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 50px;
            width: 222px;
            margin: 20px auto 30px auto;
        }
        .card-block > .row{
            margin-top: 20px;
        }
        #unblockpwd p small span{
            color: #e64500;
        }
        #unblockpwd .container-fluid div div div:hover{
            border: 2px solid #e64500;
        }
        #unblockpwd .space{
            margin-bottom: 10px;
        }
        .img1_opt, .img2_opt, .img3_opt, .img4_opt, .img5_opt, .img6_opt, .img7_opt, .img8_opt, .img9_opt, .img10_opt{
            background: url("app/assets/images/sprites.png") no-repeat;
            margin: 5px 5px 0px 5px;
            border-radius: 4px;
            display: inline-block;
        }
        .img1_opt{
            background-position: 0 0;
            width: 60px;
            height: 60px;
        }
        .img2_opt{
            background-position: -61px 0;
            width: 60px;
            height: 60px;
        }
        .img3_opt{
            background-position: -122px 0;
            width: 60px;
            height: 60px;
        }
        .img4_opt{
            background-position: -183px 0;
            width: 60px;
            height: 60px;
        }
        .img5_opt{
            background-position: -244px 0;
            width: 60px;
            height: 60px;
        }
        .img6_opt{
            background-position: -306px 0;
            width: 60px;
            height: 60px;
        }
        .img7_opt{
            background-position: -367px 0;
            width: 60px;
            height: 60px;
        }
        .img8_opt{
            background-position: -428px 0;
            width: 60px;
            height: 60px;
        }
        .img9_opt{
            background-position: -490px 0;
            width: 60px;
            height: 60px;
        }
        .img10_opt{
            background-position: -551px 0;
            width: 60px;
            height: 60px;
        }
    `]
})

export class UnlockPwdComponent { }