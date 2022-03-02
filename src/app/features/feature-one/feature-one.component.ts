import {Component, OnInit} from '@angular/core';
import {GreatService} from '../../services/great.service';
import {FeatureOneService} from './feature-one.serice';

@Component({
    selector: 'app-feature-one',
    templateUrl: './feature-one.component.html',
    styleUrls: ['./feature-one.component.sass']
})
export class FeatureOneComponent implements OnInit {

    constructor(readonly greatService: GreatService,
                readonly containerService:FeatureOneService) {
    }

    ngOnInit(): void {
        this.greatService.doSomethingGreat();
        this.containerService.log('ngOnInit in FeatureOneComponent');
    }
}
