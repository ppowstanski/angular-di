import {Component, OnInit} from '@angular/core';
import {MiningService} from '../../services';

@Component({
    selector: 'app-feature-two',
    templateUrl: './feature-two.component.html',
    styleUrls: ['./feature-two.component.sass']
})
export class FeatureTwoComponent implements OnInit {

    constructor(readonly miningService: MiningService) {
    }

    ngOnInit(): void {
        this.miningService.mine();
    }
}
