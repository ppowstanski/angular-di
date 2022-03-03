import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class GreatService {
    private static NUMBER_OF_INSTANCES = 0;
    private INSTANCE_ID = Math.floor(Math.random() * (3000));

    constructor() {
        GreatService.NUMBER_OF_INSTANCES++;
        console.log('GreatService ', GreatService.NUMBER_OF_INSTANCES, this.INSTANCE_ID);
    }

    doSomethingGreat(): void {
        console.log('I\'m doing something really great :-)', this.INSTANCE_ID);
    }
}

