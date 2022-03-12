import {Injectable} from '@angular/core';

@Injectable()
export class GreatService {
    private static NUMBER_OF_INSTANCES = 0;
    private INSTANCE_ID = Math.floor(Math.random() * (3000));

    constructor() {
        GreatService.NUMBER_OF_INSTANCES++;
        console.log(`GreatService created [InstanceID=${this.INSTANCE_ID}, Number of instances=${GreatService.NUMBER_OF_INSTANCES}]`);
    }

    doSomethingGreat(): void {
        console.log(`GreatService does something great [InstanceID=${this.INSTANCE_ID}]`);
    }
}
