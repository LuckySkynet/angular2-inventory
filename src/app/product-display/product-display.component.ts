import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'price-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.css'],
  inputs: ['price'],
})
export class ProductDisplayComponent implements OnInit {

  price: number;

  constructor() { }

  ngOnInit() {
  }

}
