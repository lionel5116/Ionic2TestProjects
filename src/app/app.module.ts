import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import{MyTeams} from '../pages/my-teams/my-teams.component';
import {Tournaments} from '../pages/tournaments/tournaments.component';
import {Teams} from '../pages/teams/teams.component';
import {TeamDetail} from '../pages/team-detail/team-detail.component';
import {Standings} from '../pages/standings/standings.component';
import {TeamHome} from '../pages/teamhome/teamhome.component';
import {Development} from '../pages/development/development.component';

//http://blog.ionic.io/10-minutes-with-ionic-2-adding-pages-and-navigation/

@NgModule({
  declarations: [
    MyApp,
    MyTeams,
    Tournaments,
    Teams,
    TeamDetail,
    Standings,
    TeamHome,
    Development
 ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeams,
    Tournaments,
    Teams,
    TeamDetail,
    Standings,
    TeamHome,
    Development
   ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
