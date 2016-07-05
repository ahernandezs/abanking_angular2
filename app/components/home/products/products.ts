import { Component } from '@angular/core';
import { RouterOutlet, ROUTER_DIRECTIVES } from '@angular/router-deprecated';

@Component({
    selector: 'products',
    templateUrl: 'app/components/home/products/products.html',
    directives: [ROUTER_DIRECTIVES],
    styles: [`
        .logo-abanking {
            background: url("app/assets/images/logo_abanking.png");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 30px;
            width: 30px;
            margin: 0px;
        }
        .container-home {
            min-height: 100%;
            height: auto !important;
            height: 100%;
            margin: -76px auto 0;
        }
        .line-black {
            margin: 0px;
            padding: 0px;
            width: 100%;
            height: 22px;
            background-color: #000000;
        }
        .line-black span {
            font-size: .8em;
            color: #e8e8e8;
        }
        @media (max-width: 33.9em) {
            .line-black {
                height: 44px;
            }
        }
        nav {
            border-radius: 0px;
            background-color: #00b1d2;
        }
        nav a, nav a:link, nav a:focus, nav a:visited, nav div button{
            color: #d6f9ff;
        }
        nav div div button {
            color: #3f454f;
        }
        .navbar-brand {
          float: none;
        }
        .navbar-nav .nav-item {
          float: none;
        }
        .navbar-divider,
        .navbar-nav .nav-item+.nav-item,
        .navbar-nav .nav-link + .nav-link {
          margin-left: 0;
        }
        @media (min-width: 34em) {
          .navbar-brand {
            float: left;
          }
          .navbar-nav .nav-item {
            float: left;
          }
          .navbar-divider,
          .navbar-nav .nav-item+.nav-item,
          .navbar-nav .nav-link + .nav-link {
            margin-left: 1rem;
          }
        }
    `]
})

export class ProductsComponent { }
