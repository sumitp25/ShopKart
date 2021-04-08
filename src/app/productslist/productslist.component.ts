import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { ProductsDataService } from '../productsdata.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-productslist',
  templateUrl: './productslist.component.html',
  styleUrls: ['./productslist.component.css']
})
export class ProductslistComponent implements OnInit {
  productList:Array<Product>;
  isAdmin:boolean = false;
  isLogged:boolean;
  sub:Subscription
  prodscart:Array<Product>
  constructor(private router:Router,service:ProductsDataService,private auth:AuthService,private cart:CartService) {

	  //fetch from service
		this.productList = service.getProductList();	
    this.isAdmin = this.auth.getIsAdmin();
    this.prodscart = this.cart.getcartlist();
    
  }

  addtocart(prod:Product){
    if(!this.isLogged){
      this.router.navigateByUrl("login")
    }else{
      this.cart.updatecartlist(prod)
      console.log(prod);
    }
    
    
  }

  presentincart(prod:Number){
      for(let p of this.prodscart){
        let index =  p.id
        if(prod === index){
          return true;
        }
      }
      return false;
  }


  delete(productid:number):void {
    let target:number;
    for (var key in this.productList) {
      if(this.productList[parseInt( key)].id === productid){
        target = parseInt( key);
      }
    }
    this.productList.splice(target,1);
    
  }

  ngOnInit(): void { 
    this.isLogged = this.auth.isLogged 
    this.sub = this.auth.getIsLogged().subscribe(logstatus=>{
      this.isLogged = logstatus
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
