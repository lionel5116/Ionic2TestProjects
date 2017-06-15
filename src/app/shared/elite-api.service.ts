import {Injectable} from '@angular/core';
import {Http,Headers,Response} from '@angular/http';

//used below for rxjs type HTTP calls
import 'rxjs';
import{Observable} from 'rxjs/Observable';

@Injectable()
export class EliteApi {

    private baseUrl = 'https://elite-schedule-app-i2-43655.firebaseio.com/';  //url for your service (that returns JSON)
    //"http://50.162.98.99/SandBoxWEBAPI/api/Onboarding/fetchInterviewees";
    //private sanboxWEBAPIUrl = "http://50.162.98.99/SandBoxWEBAPI/api/Onboarding/";
    private sanboxWEBAPIUrl = "http://73.166.158.122/SandBoxWEBAPI/api/Onboarding/";
    private headers = new Headers({'Content-Type': 'application/json'});
    private responseFromPost:any;

    currentTourney: any = {};  //declare an emtpy array to store some results returned from WS call
    interviewees: any = {};

    constructor(private http: Http) {
    }

    getTornaments() {
        return new Promise(resolve => {
           this.http.get(`${this.baseUrl}/tournaments.json`)
           .subscribe(res => resolve(res.json()));
        });
    }

    //used below for rxjs type HTTP calls - this is a new way of calling HTTP calls in Angular2
    getTournamentData(tourneyID) : Observable<any>{
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyID}.json`)
             .map((response:Response) =>{
                 this.currentTourney = response.json();
                 return this.currentTourney;
             })

             ;

    }

    //this works !!!!!!!! (It calls my private web server and home and works through browser..)
    getInterviewees(){
         return this.http.get(`${this.sanboxWEBAPIUrl}/fetchInterviewees/`)
             .map((response:Response) =>{
                 this.interviewees = response.json();
                 return this.interviewees;
             })
            .catch(this.handleHttpError);

    }

    private handleHttpError(error: Response | any){
      let errMsg: string;
      if(error instanceof Response){
          const body = error.json() || '';
          const err = error || JSON.stringify(body)
          errMsg = `${error.status} -  ${error.statusText || ''} ${err}`
      }
      else
      {
           errMsg = error.message ? error.message : error.toString();
      }
      console.log(errMsg);
      alert("There was an issue with the web service call... check your URL");
      return Observable.throw(errMsg);

    }

    addNewInterviewee(interviewee:any){
      return this.http
        .post(this.sanboxWEBAPIUrl + /addInterviewee/, JSON.stringify(interviewee), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only - githu change
        return Promise.reject(error.message || error);
    }
}
