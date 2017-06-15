import { Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';

@Component({
    templateUrl:'team-detail.html'
})
export class TeamDetail {
    
    team: any;

    constructor(private nav: NavController,private navParams:NavParams){
       this.team = this.navParams.data;
       console.log('**nav params:',this.navParams);
    }
}
