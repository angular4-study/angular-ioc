import { Injectable } from '@angular/core';

/**
 * 建议所有的服务都加上@Injectable()装饰器，这样可以提高代码一致性
 */
@Injectable()
export class LoggerService {

  constructor() { }

  log(message: string) {
    console.log(message);
  }

}
