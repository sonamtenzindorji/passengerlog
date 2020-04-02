import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {StorageService} from '../services/storage.service';
import {ToastController} from '@ionic/angular';
import {HttpService} from '../services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storageService:StorageService
    ,private toastController: ToastController,private httpService:HttpService) {}

  public passengerDetails={
    passengerName:''
    ,contactReg:''
    ,presentAddress:''
    ,emailID:''
}

   async savePassengerReg(){
    //this.storageService.savePassengerReg(this.passengerDetails);
    alert(this.httpService.getPassengerDetail(this.passengerDetails));
    const toast=await this.toastController.create({
      message:'Passenger is registered successfully'
      ,position:'middle'
      ,buttons:[{text:'Ok',role:'cancel'}]
    });
    toast.present();
    // this.storageService.savePassengerReg(this.passengerDetails).subscribe((res:any)=>{
      // alert("dfdf");
        // });
  }
  
}
