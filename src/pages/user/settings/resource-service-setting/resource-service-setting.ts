import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppSettings, SettingsService } from '../../../../shared/services/settings.service';

@Component({
    selector: 'page-resource-service-setting',
    templateUrl: 'resource-service-setting.html',
})
export class ResourceServiceSettingPage {
    setting = AppSettings;

    constructor(
        public navCtrl: NavController
    ) {
    }

    save(): void {
        SettingsService.save();
        this.navCtrl.pop();
    }
}
