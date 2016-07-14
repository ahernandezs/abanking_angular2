import { Component } from '@angular/core';

@Component({
    selector: 'publicitybar',
    template: `
        <div class="row hidden-md-down">
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-block">
                        <img src="app/assets/images/publicity/banner-ishop.png" class="img-fluid center-block" alt="Publicity">
                        <a href="#" class="btn btn-secondary">Button</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-block">
                        <img src="app/assets/images/publicity/banner-rogerwaters.png" class="img-fluid center-block" alt="Publicity">
                        <a href="#" class="btn btn-secondary">Button</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                    <div class="card-block">
                        <img src="app/assets/images/publicity/banner-viaje.png" class="img-fluid center-block" alt="Publicity">
                        <a href="#" class="btn btn-secondary">Button</a>
                    </div>
                </div>
            </div>
        </div>`,
    styles: [`
        .row {
            padding-top: 20px;
        }
        .card-block {
            margin: 0;
            padding: 0;
        }
        a {
            color: #3f454f !important;
        }
    `]
})

export default class PublicitybarComponent { }
