import { Component } from '@angular/core';

@Component({
    selector: 'navbar',
    template: `
    <div>
        <div class="top hidden-xs-down">
            <div class="container">
                <p>Lunes 18 de Julio del 2016 | Último acceso: 13/07/16 a las 23:34:54</p>
            </div>
        </div>
        <nav class="navbar navbar-full navbar-dark" id="navAcoord">
            <div class="container panel">

                <div class="navbar-brand logo-abanking hidden-sm-down"></div>
                <button class="navbar-toggler collapsed hidden-md-up"                       type="button" data-toggle="collapse" data-parent="#navAcoord" href="#collapsemenu" aria-expanded="false" aria-controls="collapsemenu">&#9776;</button>
                <button class="navbar-toggler collapsed hidden-md-up pull-xs-right p-x-1"   type="button" data-toggle="collapse" data-parent="#navAcoord" href="#collapseconf" aria-expanded="false" aria-controls="collapseconf"><span class="icon-cog"></span></button>
                <button class="navbar-toggler collapsed hidden-md-up pull-xs-right"         type="button" data-toggle="collapse" data-parent="#navAcoord" href="#collapsecont" aria-expanded="false" aria-controls="collapsecont"><span class="icon-question"></span></button>

                <div class="collapse navbar-toggleable-sm">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">Cuentas</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Inversiones</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Impuestos</a>
                        </li>
                        <li class="nav-item pull-md-right">
                            <div class="dropdown">
                                <a class="btn dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sergio Consuelo Ortiz
                                </a>
                                <span class="icon-question"></span>
                                <div class="dropdown-menu dropdown-menu-right shadow" aria-labelledby="dropdownMenu1">
                                    <a class="dropdown-item" href="#">Ajustes</a>
                                    <a class="dropdown-item" href="#">Tour</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Cerrar sesión</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>

                <div id="collapsemenu" class="panel-collapse collapse hidden-md-up">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">Cuentas</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Inversiones</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Impuestos</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Cerrar sesión</a>
                        </li>
                    </ul>
                </div>

                <div id="collapseconf" class="panel-collapse collapse hidden-md-up">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">Ajustes</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Tour</a>
                        </li>
                    </ul>
                </div>

                <div id="collapsecont" class="panel-collapse collapse hidden-md-up">
                    <ul class="nav navbar-nav">
                        <li class="nav-item">
                            <a href="/" class="nav-link active">Chat</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Email</a>
                        </li>
                        <li class="nav-item">
                            <a href="/" class="nav-link">Móvil</a>
                        </li>
                    </ul>
                </div>

            </div>
        </nav>
    </div>
        `,
    styles: [`
        div.top {
            background-color: #000000;
            height: 20px;
            width: 100%;
        }
        div.top p {
            padding-top: 2px;
            font-size: .75em;
            color: #b8b8b8;
        }
        .navbar {
            background-color: #00b1d2;
        }
        .logo-abanking {
            background: url("app/assets/images/logos/logo_abanking.png");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 30px;
            width: 30px;
            margin: 5px 15px 0px 0px;
        }
        button.navbar-toggler {
            color: #FFFFFF;
            outline: none;
            margin: 8px 0px 8px 0px;
            padding: 0;
        }
        .dropdown-toggle, .icon-question, .icon-cog{
            color: rgba(255,255,255,.5);
        }
        .dropdown-toggle:active, .dropdown-toggle:hover, .icon-question:active, .icon-question:hover, .icon-cog:active, .icon-cog:hover{
            color: rgba(255,255,255,.75);
        }
        .dropdown-menu {
            margin-right: 40px;
        }
        a.navbar-brand {
            cursor: pointer;
        }
        .navbar-nav .nav-item {
            float: none;
        }
        .navbar-divider,
        .navbar-nav .nav-item+.nav-item,
        .navbar-nav .nav-link + .nav-link {
            margin-left: 0;
        }
        @media (min-width: 48em) {
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

export default class NavbarComponent { }
