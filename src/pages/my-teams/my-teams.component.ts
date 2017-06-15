import { Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Tournaments} from '../tournaments/tournaments.component';
import {Development} from '../development/development.component';

@Component({
    templateUrl:'my-teams.html'
})
export class MyTeams {
    constructor(private nav: NavController){}
     
     goToTournaments(){
       this.nav.push(Tournaments);
    }

    goToToDevPage(){
        this.nav.push(Development);
    }
}