import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    homeRoot = 'HomePage';
    secondRoot = 'SecondPage';
    thirdRoot = 'ThirdPage';

    constructor(public navCtrl: NavController) {
    }
}
