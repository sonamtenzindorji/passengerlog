import { Component, OnInit } from '@angular/core';
import {StorageService}  from 'src/app/services/storage.service'
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { AuthConstant } from 'src/app/config/auth-constant';
import {Router}  from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authservice:AuthService
              ,private storageServie:StorageService
              ,private router:Router) { }

  ngOnInit() {
  }
  public postData={
    username:'',
    password:''
    };
  validateInputs(){
    let username=this.postData.username;
    let password=this.postData.password;
     return (this.postData.username &&this.postData.password && username.length>0 && password.length>0)
     }

     async actionLogin(){
     if(this.validateInputs){
        // this.authservice.login(this.postData).subscribe((res:any)=>{
          //if(res.userData){
            // this.storageServie.store(AuthConstant.AUTH,res.userData);
            // this.router.navigate(['home']);
          //}
        // });
        this.router.navigate(['home']);
     }
    }

    async registration(){
    alert("okkkkkkkkkk");
    this.router.navigate(['/signup']);
  }
}
