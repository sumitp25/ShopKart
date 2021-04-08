import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Product } from '../product';
import { ProductsDataService } from '../productsdata.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
  
})
export class InventoryComponent implements OnInit {

  isAdmin:boolean;

  productList:Array<Product>;
    constructor(service:ProductsDataService, private auth:AuthService) {
      console.log("inventory constructor called");
      this.productList = service.getProductList();
      this.isAdmin = this.auth.getIsAdmin();
   }

  ngOnInit(): void {
    
  } 
  
  updatePrice(newpricevalue:number,productId:number){
    //find the product and update the price
    for(var i in this.productList){
      if(this.productList[i].id === productId){
        this.productList[i].price = newpricevalue;
        break;
      }
    }
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
}
