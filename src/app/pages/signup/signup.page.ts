import { Component, OnInit } from '@angular/core';
import {HttpService} from '../../services/http.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  constructor( private httpService:HttpService) { }
  ngOnInit() {
  }

  public signUpDetails={
    licenseNo:'',
    password:'',
    driverContactNo:''
  }
  signUp(){
    this.httpService.signUp(this.signUpDetails);
  }

}
