import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    template: `
        <div class="footer" id="footerLog">
            <div class="container-fluid">
                <div class="row text-xs-center">
                    <div class="col-sm-5 col-xl-3">
                        <p>&copy; 2016 Anzen Soluciones S.A. de C.V.</p>
                    </div>
                    <div class="col-sm-7 col-xl-4 col-xl-offset-5">
                        <p>
                            <a href="javascript:void(0);">Aviso legal</a> |
                            <a href="javascript:void(0);">Sucursales</a> |
                            <a href="javascript:void(0);">Cont&aacute;ctanos</a> |
                            <a href="javascript:void(0);">Ayuda</a>
                            <select class="form-control">
                                <option>Lenguaje</option>
                                <option>Español</option>
                                <option>Ingl&eacute;s</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>
        </div>`,
    styles: [`
        #footerLog {
            background-color: #ccd3ee;
            width: 100%;
            height: 35px;
        }
        p, a, select {
            padding: 0;
            margin: 0;
            font-size: 8pt;
            margin-top: 10px;
        }
        select {
            display: inline-block;
            width: 80px;
            height: 20px;
            margin-top: -2px;
            margin-left: 4px;
        }
        @media (max-width: 47.9em) {
            select{
                width: 60px;
            }
        }
        @media (max-width: 33.9em) {
            #footerLog{
                height: 68px;
            }
            p:first-child{
                padding-top: 6px;
            }
            p:last-child{
                margin-top: 0px;
            }
            select{
                width: 80px;
            }
        }
    `]
})

export default class FooterComponent { }
