import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  username:string = null;
  isLogged:boolean = false;
  cart_quantity:number
  sub:Subscription
  constructor(private auth:AuthService,private cart:CartService) {
    this.auth.getUsername().subscribe(updateusername=>{
      this.username = updateusername
      console.log(this.username);
      
    })

    this.cart.getcartsize().subscribe(cartsize=>{
      this.cart_quantity = cartsize 
    })

    this.auth.getIsLogged().subscribe(logstatus=>{
      this.isLogged = logstatus
    })
  }
  ngOnInit() {

  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  logout(){
    this.auth.setIsAdmin(false)
    this.auth.setIsLogged(false)
    this.cart.clearcart();
  }

}
