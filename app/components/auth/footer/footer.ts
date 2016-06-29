import { Component } from '@angular/core';

@Component({
    selector: 'footer',
    template: `
        <div class="footer-login">
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
                            <a href="javascript:void(0);">Ayuda</a><i></i>
                            <select class="form-control">
                                <option>Lenguaje</option>
                                <option>Español</option>
                                <option>Ingl&eacute;s</option>
                            </select>
                        </p>
                    </div>
                </div>
            </div>
        </div>`
})

export default class FooterComponent { }