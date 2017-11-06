import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from '../shared/product.service';
import {AnotherProductService} from '../shared/another-product.service';

/**
 * 指定组件内定义的提供器
 * 会覆盖掉模块中声明的提供器，（相当于重写父类，就近原则）
 */
@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css'],
  providers: [
    {provide: ProductService, useClass: AnotherProductService}
  ]
})
export class Product2Component implements OnInit {

  product: Product;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.product = this.productService.getProduct();
  }

}
