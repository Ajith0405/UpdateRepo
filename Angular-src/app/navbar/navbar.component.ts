import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userAuthService:UserAuthService,
    private router : Router,
    public userService:UserService){
  }

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }


  public logout(){
    this.userAuthService.clear();
    this.router.navigate(["/home"]);
  }

}
