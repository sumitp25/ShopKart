import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-updateinventory',
  templateUrl: './updateinventory.component.html',
  styleUrls: ['./updateinventory.component.css']
})
export class UpdateinventoryComponent implements OnInit {

  @Input()
  product:Product;

  @Output()
  update = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  EmitProduct(){
    this.update.emit(this.product)
  }

}
