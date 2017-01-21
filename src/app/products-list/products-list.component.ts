import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  //使用inputs和outputs元数据可与父组件进行数据传输
  inputs: ['productList'],
  outputs: ['onProductSelected']
})
export class ProductsListComponent implements OnInit {

  productList: Product[];
  onProductSelected: EventEmitter<Product>;
  currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product){
    if(!this.currentProduct || !product){
      return false;
    }
    return this.currentProduct.sku === product.sku;
  }

}
