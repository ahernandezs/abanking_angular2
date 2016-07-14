import { Component } from '@angular/core';

@Component({
    selector: 'publicity',
    template: `
        <div>
            <button class="btn btn-info" data-toggle="modal" data-target=".modal">Modal Publicity</button>

            <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="publicity" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <div class="logo-abanking"></div>
                            <div>Definiendo la banca del futuro</div>
                        </div>
                        <div class="modal-body">
                            <p>
                                <strong>En aBanking trabajamos constantemente en ofrecerte una mejor experiencia bancaria.</strong><br>
                                Por ello, hemos integrado las siguientes funcionalidades:
                            </p><br>
                            <img src="app/assets/images/publicity/cont.png" class="img-fluid center-block" alt="Publicity">
                            <br><p>
                                <strong>Solicitar Nueva tarjeta de crédito</strong><br>
                                Ahora desde tu panel de cuentas puedes solicitar las tarjetas preaprobadas que aBanking te ofrece.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <div class="pull-xs-left">
                                <p><small class="text-muted">Puedes configurar las alertas que aparecen en aBanking desde preferencias.</small></p>
                            </div>
                            <button type="button" class="btn btn-info">Alertas</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
    styles: [`
        .modal-footer {
            border: none;
        }
        .modal-footer div {
            width: -moz-calc(100% - 95px);
            width: -webkit-calc(100% - 95px);
            width: -o-calc(100% - 95px);
            width: calc(100% - 95px);
            padding-top: 8px;
        }
        p {
            text-align: justify;
            font-size: .8em;
        }
        .modal-dialog {
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            -webkit-box-shadow: 0px 1px 2px 0px rgba(150, 150, 150, 1);
            -moz-box-shadow: 0px 1px 2px 0px rgba(150, 150, 150, 1);
            box-shadow: 0px 1px 2px 0px rgba(150, 150, 150, 1);
        }
        .modal-content {
            border: none;
        }
        .modal {
            background-color: rgba(255, 255, 255, .8) !important;
        }
        div.logo-abanking {
            background: url("app/assets/images/logos/abanking-white-logo.png");
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 30px;
            width: 120px;
            margin: 0px 20px 0px 0px;
            float: left;
        }
        div.modal-header {
            background-color: #00b1d2;
            border-bottom: 5px solid #3f454f;
        }
        .modal-header div:last-child {
            height: 30px;
            width: auto;
            float: left;
            padding-top: 6px;
            color: #FFFFFF;
            font-size: 1em;
        }
        button.close {
            color: #FFFFFF;
        }
        @media (max-width: 33.9em) {
            div.logo-abanking {
                margin: 0px 5px 0px 0px;
            }
            .modal-header div:last-child {
                padding-top: 8px;
                font-size: .85em;
            }
            .modal-footer div {
                padding: 0px 10px 0px 0px;
            }
        }
        @media (max-width: 41em) and (min-width: 34em) {
            .modal-dialog {
                width: 90%;
            }
        }
        @media (min-width: 41em) {
            .modal-dialog {
                width: 600px;
            }
        }
    `]
})

export default class PublicityComponent { }
