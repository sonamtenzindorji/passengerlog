import { Injectable } from '@angular/core';
import {HttpService} from './http.service';
import {StorageService} from './storage.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpService
    ,private storageService:StorageService) { }

    // login(postDate:any):Observable<any>{
    // return null;
    // return this.httpService.save('login',postDate);
//}

   /* signup(postDate:any):Observable<any>{
    return this.httpService.save('login',postDate);
    }

    //logout(){
      //this.storageService.

      */
   }
