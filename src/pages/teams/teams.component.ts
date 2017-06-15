import { Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {TeamHome} from '../teamhome/teamhome.component';
import {EliteApi} from '../../app/shared/elite-api.service';

@Component({
    templateUrl:'teams.html'
})
export class Teams {

    /* WE WILL BE GRABBING HIS DATA VIA WS CALL (RXJS WS CALL)
    teams = [
       {id: 1, name: 'HC Elite'},
       {id: 2, name: 'Team Takeover'},
       {id: 3, name: 'DC Thunder'},
       {id: 4, name: 'Pimp Daddy'}
    ];
    */
    //used to store the results of WS call
    //as opposed to an array, we will be processing results from WS call
    teams = [];  

    constructor(private nav: NavController, 
                private navParams: NavParams,
                private eliteApi:EliteApi){

    }

   //below is the rxjs new way of processing a web request**
   ionViewDidLoad(){
       let selectedTourney = this.navParams.data;
       this.eliteApi.getTournamentData(selectedTourney.id).subscribe(data => {
           this.teams = data.teams;
       })
    }
   

  itemTapped($event,team){
       // this.nav.push(TeamDetail);
      // --changed because of tabs implementation this.nav.push(TeamDetail,team);
      this.nav.push(TeamHome,team);
    }
}
