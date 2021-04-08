import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartproductlist:Array<Product>;
  totalamount:number;
  prodquantity:object;
  constructor(private service:CartService) {
    this.cartproductlist = this.service.getcartlist();
    this.totalamount = this.service.gettotalamount();
    this.prodquantity = this.service.getproductquantity();
  }

  ngOnInit() {
  }
  removeclick(prod:number){
    this.service.deleteproductfromcart(prod)
    this.totalamount = this.service.gettotalamount();
    this.prodquantity=this.service.getproductquantity();
  }

  addprod(prod){
    this.service.updatecartlist(prod)
    this.totalamount=this.service.gettotalamount();
  }

  removefromcart(prod){
    this.service.removefromcart(prod)
    this.totalamount = this.service.gettotalamount();
  }
  
 
}
