import { Product } from './product';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})
export class BigBasketDataService{
  productList:Array<Product>;
  constructor() {  
    //super();
    let p1 = new Product(1,'REDMI 9i (Sea Blue, 64,GB)',"Mobiles",7999,"assets/images/redmi9i.jpg")
    let p2 = new Product(2,'Realme Narzo 20 (Glory Silver, 128 GB)  (4 GB RAM)',"Mobiles",12000,"assets/images/realme.jpg")
    let p3 = new Product(3,'POCO M3 (Power Black, 128 GB)  (6 GB RAM)',"Mobiles",11999,"assets/images/pocom3.jpg")
    let p4 = new Product(4, "SonyDSC", "Camera", 64000, "assets/images/2.jpg");
    let p5 = new Product(5, "Lenovo110", "Laptops", 54000, "assets/images/3.jpg");
    let p6 = new Product(6, "Xiomi55", "Mobiles", 14000, "assets/images/4.jpg");
    let p7 = new Product(7, "Samsung Galaxy", "Mobiles", 44000, "assets/images/5.jpg");
    let p8 = new Product(8, "MotoG4", "Mobiles", 24000, "assets/images/1.jpg");

    this.productList.push(p1);
    this.productList.push(p2);
    this.productList.push(p3);
    this.productList.push(p4);
    this.productList.push(p5);
    this.productList.push(p6);
    this.productList.push(p7);
    this.productList.push(p8);

  }
  getProductList():Array<Product>{
    return this.productList;
  }

}
