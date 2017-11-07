## angular依赖注入 (类似spring)
  ### 由注入器和提供器组成
  ### 控制反转：将依赖的控制权从代码的内部转到代码的外部
  ### 依赖注入：将各种实体注入到angular容器中，方便别的地方引用
  - 控制反转和依赖注入是一体两面的，表达的是一个思想，控制反转侧重于描述目的（控制权由内转外），
  而依赖注入侧重于描述手段（实现控制反转所使用的手段）
  - 依赖注入的好处：
    - 1.松耦合，可重用
    - 2.可测试性

## 服务(service)：
  - 创建服务：ng g service shar/login    //在app/shar/下创建login服务（没有shar会自己创建文件夹）
  - 

## 提供器(providers)：负责实例化所依赖的实例对象
  ### 用法：
    - 1.直接声明：providers: [XService]
    - 2.详细声明：providers: [provide: XService,useClass: AnotherXService]  //声明一个提供者，匹配provider指定的token，而由useClass的值来实现(前提是AnotherXService必须implements XService)

  ### 作用域：
    - 1.当声明在模块中时，对所有组件可见
    - 2.当声明在组件中时，只对此组件和其子组件可见
    - 3.当声明在模块中的提供器和声明在组件中的提供器具有相同的token(name)时，以小覆盖大，就近原则
    - 4.一般情况下，推荐将服务声明在模块中，只有特殊情况才会声明在组件中

## 注入器：将实例化好的对象注入所需要的组件
  ### 注入器层级关系：
    - 应用级注入器(app.module.ts) > 主组件注入器(app.components.ts) > 子组件注入器(product1.components.ts)
    - 顺序：当实例化Product1Component时，会走构造函数，发现需要引入一个ProductService，它会先在自己的providers里面寻找，如果没有找到，
    再向上，到父组件(这里就是app.components.ts)里面去找，如果还没找到，再到应用级注入器(app.module.ts)里面去找


# AngularIoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
