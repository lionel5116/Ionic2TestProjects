import { Component} from '@angular/core';
import {LoadingController,NavController} from 'ionic-angular';
import {Teams} from '../teams/teams.component';  //pages/teams
import {EliteApi} from '../../app/shared/elite-api.service';

@Component({
    templateUrl:'tournaments.html'
})
export class Tournaments {
     
     tournaments: any;

     constructor(private nav: NavController, 
                 private eliteApi:EliteApi,
                 private loadingController:LoadingController){

    }

    /* 
    itemTapped(){
        this.nav.push(Teams);
     }
    */
    
     itemTapped($event,tourney){
        this.nav.push(Teams,tourney);
     }

     ionViewDidLoad(){
       let loader = this.loadingController.create({
           content: 'Getting tournaments..'
       });

       loader.present().then(() => {
           this.eliteApi.getTornaments().then(data => {
           this.tournaments = data;
           loader.dismiss();
         });
       });
       
      
     }
   
}