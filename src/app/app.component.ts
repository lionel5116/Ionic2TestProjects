import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HttpModule } from '@angular/http';

import{MyTeams} from '../pages/my-teams/my-teams.component';
import {Tournaments} from '../pages/tournaments/tournaments.component';
import {EliteApi} from './shared/elite-api.service';


//http://blog.ionic.io/10-minutes-with-ionic-2-adding-pages-and-navigation/

@Component({
  templateUrl: 'app.html',
  providers: [
    EliteApi,
    HttpModule
  ]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeams;

  constructor(public platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  /*
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
  */
    //<button menuClose ion-item (click)="goHome()">Home</button>
     //   <button menuClose ion-item (click)="goToTournaments()">Find a Tournament</button>
   goHome() {
     this.nav.push(MyTeams);
   }
   
   goToTournaments(){
      this.nav.push(Tournaments)
   }

}
