import {Component, OnInit} from '@angular/core';
import {MiningService} from '../../../services';
import {CarbonService} from '../../../services/carbon.service';

@Component({
    selector: 'app-feature-one-child',
    templateUrl: './feature-one-child.component.html',
    styleUrls: ['./feature-one-child.component.sass'],
    providers: [
        {
            provide: MiningService,
            useClass: CarbonService
        }
    ]
})
export class FeatureOneChildComponent implements OnInit {

    constructor(readonly miningService: MiningService) {
    }

    ngOnInit(): void {
        console.log('[FeatureOneChildComponent:ngOnInit]');
        this.miningService.mine();
    }
}
