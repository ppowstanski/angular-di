import {Injectable, Optional, SkipSelf} from '@angular/core';

@Injectable({providedIn: 'root'})
export class GreatService {

    constructor(@Optional() @SkipSelf() parentService: GreatService) {
        if (!!parentService) {
            throw new Error('GreatService should be singleton but there was a try of creating another instance.')
        }
    }

    doSomethingGreat(): void {
        console.log('I\'m doing something really great :-)');
    }
}


