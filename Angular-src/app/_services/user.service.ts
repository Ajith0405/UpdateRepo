import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private s1:HttpClient, private userAuthService:UserAuthService) { }

  linkAPI = "http://localhost:9007";

  requestHeader = new HttpHeaders(
    {"No-Auth":"True"}
  );

  public login(loginData:any){
    return this.s1.post(this.linkAPI +"/authenticate",loginData,{headers:this.requestHeader});
  }

  public forUser(){
    return this.s1.get(this.linkAPI +'/forUser',{responseType:'text'});
  }

  public forAdmin(){
    return this.s1.get(this.linkAPI +'/forAdmin',{responseType:'text'});
  }

  public roleMatch(allowedRoles: string | any[]):boolean{
    let isMatch = false;
    const userRoles:any =  this.userAuthService.getRoles();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            return true; // Return true if there is a match
          }
        }
      }
    }
  
    return false;

  }
}
