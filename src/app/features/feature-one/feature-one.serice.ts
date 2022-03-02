import {Injectable} from '@angular/core';

@Injectable()
export class FeatureOneService {
    log(logText: string): void {
        console.log('[FeatureOneService:log]', logText);
    }
}
