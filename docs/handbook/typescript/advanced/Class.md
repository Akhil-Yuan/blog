---
title: 类
author: Akhil
date: '2021-12-26'
---

类的本质是ES5继承的语法糖。

## 什么是类
在 ES5 中，我们通常是通过**原型链**来实现继承的。在 ES6 中，新提出了 **类（Class）** 的概念，这个概念在 TS 中也适用。
类定义了一切事物的**抽象特点**。比如对于型号的车辆，他们都属于一类，那就是车，所以车就可以看成所有型号车的类。而对象就是类的**实例**，比如一辆五菱mini就是车类的对象。

## 面向对象
有了类，我们就可以使用面向对象的思想来使用 JavaScript。面向对象（OOP）的三大特性分别是：**封装性、多态性、继承性**。
**封装**就是指将内部对数据操作的细节隐藏起来，只暴露对外接口。外界的调用端不需要了解内部的如何实现的，即外界通过接口访问对象。
**继承**是指子类继承父类后，不仅能够获得父类的属性，也能够拥有自己的属性。
**多态**是由继承产生的不同类对于相同方法的实现。比如猫和狗都继承自动物类，动物类中有一个叫的方法，但是猫和狗对于叫都有不同的实现。
```typescript
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  run() {
    return `${this.name} is running`
  }
}
class Dog extends Animal {
  bark() {
    return `${this.name} is barking`
  }
}
class Cat extends Animal {
  constructor() {
    super(name)
    console.log(this.name)
  }
  run() {
    return 'Meow' + super.run()
  }
}
```
