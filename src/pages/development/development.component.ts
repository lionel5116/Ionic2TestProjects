import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import {EliteApi} from '../../app/shared/elite-api.service';

/*
  Generated class for the Development page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-development',
  templateUrl: 'development.html'
})
export class Development {

  constructor(public navCtrl: NavController,
                     public navParams: NavParams,
                     private eliteApi:EliteApi,
                     private loadingController:LoadingController) {}

  interviewees = [];

  varItemInterviewee = {
    Name: '',
    JobID: 1
  };

  varItem = {
    title:'',
    description:'',
    person: ''
  };


  ionViewDidLoad() {
    console.log('fetching interviewees from web service call..');
     let loader = this.loadingController.create({
           content: 'Fetching interviewees..'
       });

         loader.present().then(() => {

           this.eliteApi.getInterviewees().subscribe(data => {
           if(data == null)
           {
               alert("Service returned no data .. or error fetching interviewees");
           }
           else
           {
                this.interviewees = data;
           }

           //when results are retured, dismiss the spinner
           loader.dismiss();

         });

       });

  }

  processResults() {
    //http://50.162.98.99/SandBoxWEBAPI/api/Onboarding/fetchInterviewees

    //you can use var or let in typescript
    let strMsg: any;
    strMsg = "Mi nombre es: " + this.varItem.title + " y mi trabajo es " + this.varItem.description;

    if (this.varItem.title != "" &&
      this.varItem.description != "") {
      alert(strMsg);
    }
    else {
      alert("Title and description cannot be blank..");
    }
  }


  addNewInterviewee(){
       if(this.varItemInterviewee.Name != ''){
           this.eliteApi.addNewInterviewee(this.varItemInterviewee);
            alert("Successully added new interviewee");
            this.varItemInterviewee.Name = '';
       }
       else{
          alert("Intervee Name cannot be blank..");
       }

  }

}
