import { Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {TeamDetail} from '../team-detail/team-detail.component';
import {Standings} from '../standings/standings.component';
import{MyTeams} from '../my-teams/my-teams.component';

@Component({
    templateUrl:'teamhome.html'
})
export class TeamHome {
    
     team:any;
     teamDetailTab = TeamDetail;
     standingsTab = Standings;
     
     constructor(private nav: NavController,private navParams: NavParams){
        this.team = this.navParams.data;
    }

    goHome(){
      //this.nav.push(MyTeams);
      //below fixes the navigation bug where you have the "back button" showing up on the home page
      this.nav.popToRoot(); //this returns you to the root page of your app
    }
}
