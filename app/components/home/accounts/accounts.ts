import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

import PublicityComponent from '../../share/publicity/publicity';
import PublicitybarComponent from '../../share/publicitybar/publicitybar';

@Component({
    selector: 'accounts',
    templateUrl: 'app/components/home/accounts/accounts.html',
    directives: [
        ROUTER_DIRECTIVES,
        PublicityComponent,
        PublicitybarComponent
    ],
    styles: [`
        p {
            margin: 0;
            padding: 0;
            font-size: 1em;
        }
        p.corte {
            font-size: .7em;
            color: #3f454f;
        }
        .cards > div:nth-child(3) {
            background-color: #f1f1f1;
            padding-top: 5px;
            padding-bottom: 5px;
        }
        .list-group-item {
            padding-top: 0px;
            padding-bottom: 0px;
            margin-bottom: 0px;
            margin-top: 0px;
        }
        .list-group-item {
            border: none;
        }
        input[type="radio"] {
            display: none;
        }
        label {
            margin: 0px;
            font-size: .7em;
            color: #3f454f;
        }
        li.list-group-item label:first-child {
            float: left;
        }
        li.list-group-item label:last-child {
            margin-top: 5px;
            float: right;
        }
        .list-group-item input {
            padding: 0px 0px 0px 4px;
            font-size: 1em;
            width: 60px;
        }
        input[type="radio"] + label span {
            background-color: #f0f0f0;
            display: inline-block;
            width: 13px;
            height: 13px;
            border-radius: 100%;
            vertical-align: middle;
            margin-right: 5px;
            cursor:pointer;
        }
        input[type="radio"]:checked + label span {
            background-color: #f7a131;
            border: 3px solid #e0e0e0;
        }
        .card-block {
            padding-top: 0px;
            padding-bottom: 0px;
        }
        .footbtn {
            margin-top: 20px;
            height: 40px;
        }
        a {
            font-size: .7em;
        }
        a.card-link:hover {
            color: #f9ae4c;
        }
        a.card-link {
            color: #008fb5;
        }
        .cont-img {
            max-width: 100%;
            height: 100px;
            overflow: hidden;
            position: relative;
            padding: 0px;
        }
        img {
            display: block;
            max-width: none !important;
            max-height: 200px;
            margin: -30px auto;
            margin-left: -25px;
        }
        .credit a {
            background-color: #f7a131;
        }
        .credit a:hover {
            background-color: #e9982f;
        }
        .credit p {
            line-height:18px;
        }
        .credit p:first-child {
            margin-top: 20px;
            margin-bottom: 10px;
            font-size: 1em;
        }
        .credit p:first-child + p {
            font-weight: 600;
            font-size: .8em;
        }
        .credit p:last-child {
            font-size: .75em;
            color: #3f454f;
            margin-bottom: 32px;
        }
        .credit .cont-img {
            min-height: 150px;
        }
        .circle-time {
            background: url("../app/assets/images/cards/cuenta_transfer_balance.png");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 90px;
            width: 94px;
            margin: 6px auto 0px auto;
        }
        @media (min-width: 62em) and (max-width: 74.9em){
            #black .card-block:first-child{

            }
        }
    `]
})

export class AccountsComponent { }
