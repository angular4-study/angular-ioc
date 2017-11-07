import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import { ProductService } from './shared/product.service';
import { Product2Component } from './product2/product2.component';
import { LoggerService } from './shared/logger.service';
import {AnotherProductService} from './shared/another-product.service';
/**
 * providers: [ProductService, LoggerService],//普通写法
 */
@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ProductService,
      // 使用工厂方法，实例化服务
      useFactory: (logger: LoggerService, appConfig) => {
        if (appConfig.isDev) {
          return new ProductService(logger);
        } else {
          return new AnotherProductService(logger);
        }
      },
      // 为工厂方法添加依赖
      deps: [LoggerService, 'APP_CONFIG'] // depends：声明工厂方法要使用的依赖
    },
    LoggerService,
    {
      provide: 'APP_CONFIG', useValue: {isDev: false}
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
