import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './product';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  subject = new Subject<any>();

  cartproductlist:Array<Product>=new Array<Product>();
  totalamount:number;
  cartproductquantity:Object = new Object()
  constructor() { 
    
  } 

  updatecartlist(prod){
    
    if(!(this.cartproductlist.includes(prod)))
      this.cartproductlist.push(prod)
    if(!(prod.id in this.cartproductquantity)){
      this.cartproductquantity[prod.id] = 1
    }else{
      this.cartproductquantity[prod.id] += 1
    }
    this.totalamount = this.cartproductlist.length
    this.subject.next(this.cartproductlist.length)
  }

  deleteproductfromcart(prod:number){
    if(this.cartproductquantity[prod] == 1){
      for(let p in this.cartproductlist){
        var index = parseInt(p);
        
        if(this.cartproductlist[index].id === prod){
          console.log(this.cartproductlist[index].name);
          
          this.cartproductlist.splice(index,1)
          break;
        }
      }
      this.cartproductquantity[prod] -= -1
      console.log(...this.cartproductlist);
    }else{
      this.cartproductquantity[prod] -= 1;
    }
    
    this.totalamount = this.cartproductlist.length
    this.subject.next(this.cartproductlist.length)
    
  }

  removefromcart(prod:number){
    for(let p in this.cartproductlist){
      var index = parseInt(p);
      
      if(this.cartproductlist[index].id === prod){
        console.log(this.cartproductlist[index].name);
        
        this.cartproductlist.splice(index,1)
        break;
      }
    }
    this.cartproductquantity[prod] = 0
    this.totalamount = this.cartproductlist.length
    this.subject.next(this.cartproductlist.length)
  }

  getproductquantity(){
    return this.cartproductquantity
  }

  clearcart(){
    this.cartproductlist.splice(0);
  }

  getcartlist():Array<Product>{
    return this.cartproductlist
  }
  gettotalamount():number{
    let amt= 0;
    for(let p of this.cartproductlist){
      amt += (p.price*this.cartproductquantity[p.id])
    }
    return amt;
  }

  getcartsize():Observable<any>{
    return this.subject.asObservable();
  }

}
