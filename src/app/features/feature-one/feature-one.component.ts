import {Component, OnInit, Optional} from '@angular/core';
import {MiningService} from '../../services/mining.service';

@Component({
    selector: 'app-feature-one',
    templateUrl: './feature-one.component.html',
    styleUrls: ['./feature-one.component.sass']
})
export class FeatureOneComponent implements OnInit {

    constructor(readonly miningService: MiningService) {
    }

    ngOnInit(): void {
        this.miningService.mine();
    }
}
