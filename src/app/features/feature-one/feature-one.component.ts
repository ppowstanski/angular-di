import {Component, OnInit} from '@angular/core';
import {GreatService} from '../../services/great.service';

@Component({
    selector: 'app-feature-one',
    templateUrl: './feature-one.component.html',
    styleUrls: ['./feature-one.component.sass']
})
export class FeatureOneComponent implements OnInit {

    constructor(readonly greatService: GreatService) {
    }

    ngOnInit(): void {
        this.greatService.doSomethingGreat();
    }
}
