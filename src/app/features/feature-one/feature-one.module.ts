import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FeatureOneComponent} from './feature-one.component';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {I18nHelper} from '@app/core';
import {ConfigurationHelper} from '@app/configuration';
import {HttpClient} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {FeatureOneService} from './feature-one.serice';
import {GreatService} from '../../services';


@NgModule({
    declarations: [
        FeatureOneComponent
    ],
    imports: [
        CommonModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: I18nHelper.createTranslateHttpLoader(ConfigurationHelper.FeatureOne),
                deps: [HttpClient]
            },
            isolate: true
        }),
        RouterModule.forChild([
            {
                path: '',
                component: FeatureOneComponent
            }
        ])
    ],
    providers: [
        FeatureOneService
    ]
})
export class FeatureOneModule {
    constructor(translateService: TranslateService) {
        I18nHelper.registerTranslateService(translateService);
    }
}
