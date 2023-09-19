import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../_services/user.service';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private userService:UserService, private userAuthService:UserAuthService,private router:Router){}

  login(loginform:NgForm){
    this.userService.login(loginform.value).subscribe(
      (resp:any)=>{
        console.log(resp.jwtToken),
        console.log(resp.user.role);
        
        this.userAuthService.setRoles(resp.user.role),
        this.userAuthService.setToken(resp.jwtToken);
        
        const role = resp.user.role[0].roleName;
        if (role === 'Admin') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/user']);
        }

        alert("Login Successfully");
      },(err)=>{
        console.log(err),alert("Invalid Username/Password");
      }
    );
    
    

  }

}
