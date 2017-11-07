import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

/**
 * @Injectable()的作用：其它服务也可以通过构造函数注入到这个class里
 */
@Injectable()
export class ProductService {

  constructor(public logger: LoggerService) { }

  getProduct(): Product {
    this.logger.log('getProduct方法被调用');
    return new Product(0, 'iphone7', 5899, '最新款苹果手机');
  }
}

export class Product {

  constructor(
    public id: number,
    public title: string,
    public price: number,
    public desc: string
  ) {

  }
}
