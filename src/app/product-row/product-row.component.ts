import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css'],
  inputs:['product'],
  host: {'class': 'item'}
})

export class ProductRowComponent implements OnInit {

  product: Product;

  constructor() { }

  ngOnInit() {
  }

}
