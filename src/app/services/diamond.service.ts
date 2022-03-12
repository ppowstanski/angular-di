import {Injectable} from '@angular/core';
import {MiningService} from './mining.service';

@Injectable({providedIn: 'root'})
export class DiamondService extends MiningService {
    mine(): void {
        console.log('[MiningService] is mining diamonds ...');
    }
}
