import { Injectable } from '@angular/core';
import { Product, ProductService } from './product.service';

@Injectable()
export class AnotherProductService implements ProductService {

  getProduct(): Product {
    return new Product(1, 'sunsumg7', 4899, '最新款三星手机');
  }

  constructor() { }

}
