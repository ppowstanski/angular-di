import {Injectable} from '@angular/core';

@Injectable()
export class FeatureOneService {
    private static NUMBER_OF_INSTANCES = 0;

    constructor() {
        FeatureOneService.NUMBER_OF_INSTANCES++;
        console.log('FeatureOneService', FeatureOneService.NUMBER_OF_INSTANCES);
    }

    log(logText: string): void {
        console.log('[FeatureOneService:log]', logText);
    }
}
