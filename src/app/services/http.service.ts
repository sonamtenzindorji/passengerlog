import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {environment} from 'src/environments/environment' ;

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  
  getPassengerDetail(data:any){
    const headers=new HttpHeaders();
    const options={headers:headers, withCredintials:false};
    const url=environment.apiUrl +"passenger/save";
    this.http.post(url,data)
    .subscribe(res => {
      alert(JSON.stringify(res));
  
    })
  }

  signUp(data:any){
    const headers=new HttpHeaders();
    const options={headers:headers, withCredintials:false};
    const url=environment.apiUrl +"passenger/signUp";
    alert(data);
    this.http.post(url,data)
    .subscribe(res => {
      alert(JSON.stringify(res));
    })
  }
}
