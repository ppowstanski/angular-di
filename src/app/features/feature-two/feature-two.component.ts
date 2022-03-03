import {Component, OnInit} from '@angular/core';
import {GreatService} from '../../services';

@Component({
    selector: 'app-feature-two',
    templateUrl: './feature-two.component.html',
    styleUrls: ['./feature-two.component.sass']
})
export class FeatureTwoComponent implements OnInit {

    constructor(readonly greatService: GreatService) {
    }

    ngOnInit(): void {
        this.greatService.doSomethingGreat();
    }
}
