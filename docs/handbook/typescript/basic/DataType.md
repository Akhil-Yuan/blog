在 JavaScript 中，数据类型可分为**原始类型**和**对象类型**。

## 原始类型

原始类型有7种：`Undefined`, `Null`, `String`, `Number`, `Boolean`, `Symbol`, `BigInt`。原始类型有一个特点，它们的值是不可改变的，如果我们对原始类型进行修改等操作，JavaScript 会返回一个新的值，原始值并不会被改变。

### 常见原始类型

除了 `Symbol` 和 `BigInt`，TypeScript 中都有数据类型和 JavaScript 数据类型一一匹配。

我们先用 TS 代码来声明变量：

```typescript
// 首字母小写是数据类型，首字母大写是接口
let isDone: boolean = false
let age: number = 21
// 二进制数字
let binaryNumber: number = 0b111

let firstName: string = 'akhil'
let message: string = `Hello ${firstName}`

// undefined 和 null 是所有类型的子类
let u: undefined = undefined
let n: null = null
```

### any 和联合类型

如果无法确定变量的数据类型，TS 还提供了其它数据类型，可以使用 `any` 和联合类型。

```typescript
let notSure: any = 4
notSure = 'maybe it is a string'
notSure = true

// any 类型的数据还可以调用各种数据类型特有的属性和方法而不会报错
notSure.myName
notSure.getName()
```

```typescript
let unionType: number | string = 123
unionType = 'abc'
```

`any` 类型用来表示允许赋值为任何类型，声明类型为 `any` 后，该变量的任意操作的返回类型都是 `any`。也正是这个特点，丧失了类型检查的作用。所以在日常开发中，要尽量避免使用 `any` 类型。

如果能够确定数据类型的范围，相比于 `any` 类型，使用联合类型会更好。

## 对象类型

### 数组

与 JS 不同，TS 能够指定数组元素类型。当然，不仅仅是对元素的数据类型进行限制，也限制了相关方法的参数。

```typescript
let arrOfNums: number[] = [1, 2, 3]
arrOfNums.push(4)
```

在 JS 中，有一种特殊的数组类型，成为类数组。
类数组是指拥有数组的一些属性，但是不具有数组的方法。

```typescript
function test () {
  console.log(arguments)
}
```

以上，arguments 就是一个类数组。它具有数组的 `length` 等属性，但是不可以调用数组的 `forEach` 等方法。

在 TS 中，如果把 `arguments` 赋值给一个数组是会报错的，因为 TS 在内部给 `arguments` 定义了一个接口，称为 `IArguments`。（TS 通常给接口名称前加I)

从上文我们可以了解到，数组可以将统一类型的数据组合在一起，那我们如何将不同的数据类型组合在一起呢？TS 提供了一种新的数据类型——元组 Tuple：

```typescript
let user: [string, number] = ['akhil', 21]
```

### 函数

函数主要由两部分组成：输入/参数、输出/返回值。

下面介绍函数的两种写法，分别是函数声明和函数表达式：

```typescript
// 函数声明
function add(a: number, b: number, c?: number): number {
  if (typeof c === 'number') {
    return a + b + c
  } else {
    return a + b
  }
}
let res = add(1, 2)
res = add(1, 2, 3)
```

从上边的代码可以看出，参数 c 是可选的。TS 规定，函数的可选参数必须写在参数列表的最后。
在 ES6 中，我们也可以在函数声明中给参数设定一个默认值，如果参数没有传入值就会使用这个默认值。

```typescript
// 函数表达式
const add = function(a: number, b: number, c?: number) {
  if (typeof c === 'number') {
    return a + b + c
  } else {
    return a + b
  }
}
const add2: (a: number, b: number, c?: number) => number = add
```

## 小结
TS 中，为了充分发挥**类型检查**的功能，通常在定义变量的时候，会在变量后加冒号来声明变量类型。
除了 `Symbol` 和 `BigInt`，TS 的**基本数据类型**和 JS 并没有太大的差异。值得注意的是，`undefined` 和 `null` 是其它类型的子类，所以其它数据类型能被赋值为`undefined`和`null`而不会报错。
在**复杂数据类型**中，数组可以指定元素类型，如果元素类型单一，可以使用"xxx[]"进行定义，否则可以使用元祖声明多种不同类型的数据。
在**无法判断变量类型**的情况下，如果类型范围已知，可以使用联合类型来描述变量类型。如果类型范围未知，可以使用`any`来描述变量类型，但是在日常开发中，我们要尽量避免使用，因为any变量任何操作返回的变量类型都是`any`，会使TS丧失类型判断的能力。
