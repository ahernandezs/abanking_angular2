import { Injectable } from '@angular/core';

@Injectable()
export class Prueba {
    constructor(public state = 'inactive'){

    }

    toggleState(){
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
}
