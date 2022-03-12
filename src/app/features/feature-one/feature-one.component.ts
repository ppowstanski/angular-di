import {Component, OnInit, Self, SkipSelf} from '@angular/core';
import {MiningService} from '../../services/mining.service';
import {CarbonService} from '../../services/carbon.service';

@Component({
    selector: 'app-feature-one',
    templateUrl: './feature-one.component.html',
    styleUrls: ['./feature-one.component.sass'],
    providers: [
        {
            provide: MiningService,
            useClass: CarbonService
        }
    ]
})
export class FeatureOneComponent implements OnInit {

    constructor(@SkipSelf() readonly miningService: MiningService) {
    }

    ngOnInit(): void {
        this.miningService.mine();
    }
}
