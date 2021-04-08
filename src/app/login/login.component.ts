import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = null;
  password:string = null;
  isLogged:boolean = false;
  constructor(private router:Router,
              private auth:AuthService) { }

  ngOnInit(): void {
  }
  login(){
    //logic to check for authentication
    //http call would be made
    this.auth.setUsername(this.username)
    this.auth.setIsLogged(true)
    if(this.username == "admin"){
      console.log("hit");
      this.auth.setIsAdmin(true);
    }
    this.router.navigateByUrl('/products')
  }

}
