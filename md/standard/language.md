# JS语言规范

## 语言规范

JavaScript 是一种客户端脚本语言，这里列出了编写 JavaScript 时需要遵守的规则。

### 类型

- 原始类型: 存取原始类型直接作用于值本身
  - 布尔类型
  - Null 类型
  - Undefined 类型
  - 数字类型
  - BigInt 类型
  - 字符串类型
  - 符号类型 Symbol

  ```js
  const foo = 1
  let bar = foo

  bar = 9

  console.log(foo, bar) // 1, 9
  ```

- 复杂类型: 访问复杂类型作用于值的引用
  - object
  - array
  - function

  ```js
  const foo = [1, 2, 3]
  const bar = foo

  bar[0] = 9

  console.log(foo[0], bar[0]) // 9, 9
  ```

### 引用

- 请记得 `const` 和 `let` 都是块级作用域，`var` 是函数级作用域

```js
// const and let only exist in the blocks they are defined in.
{
  let a = 1
  const b = 1
}
console.log(a) // ReferenceError
console.log(b) // ReferenceError
```

- 对所有引用都使用 `const`，不要使用 `var`，eslint: [prefer-const](https://eslint.org/docs/rules/prefer-const.html), [no-const-assign](https://eslint.org/docs/rules/no-const-assign.html)

> 原因：这样做可以确保你无法重新分配引用，以避免出现错误和难以理解的代码

  ```js
  // bad
  var a = 1
  var b = 2

  // good
  const a = 1
  const b = 2
  ```

- 如果引用是可变动的，使用 `let` 代替 `var`，eslint: [no-var](https://eslint.org/docs/rules/no-var.html)

> 原因：`let` 是块级作用域的，而不像 `var` 属于函数级作用域

  ```js
  // bad
  var count = 1
  if (count < 10) {
    count += 1
  }

  // good
  let count = 1
  if (count < 10) {
    count += 1
  }
  ```

### 对象

- 请使用字面量值创建对象，eslint: [no-new-object](https://eslint.org/docs/rules/no-new-object.html)

  ```js
  // bad
  const a = new Object{}

  // good
  const a = {}
  ```

- 别使用保留字作为对象的键值，这样在 IE8 下不会运行

  ```js
  // bad
  const a = {
    default: {},  // default 是保留字
    common: {}
  }

  // good
  const a = {
    defaults: {},
    common: {}
  }
  ```

- 当使用动态属性名创建对象时，请使用对象计算属性名来进行创建

> 原因：因为这样做就可以让你在一个地方定义所有的对象属性

```js
function getKey(k) {
  return `a key named ${k}`
}

// bad
const obj = {
  id: 5,
  name: 'San Francisco'
};
obj[getKey('enabled')] = true

// good
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true
};
```


- 不要直接使用 `Object.prototype` 的方法, 例如 `hasOwnProperty`, `propertyIsEnumerable` 和 `isPrototypeOf` 方法，eslint: [no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)
> 原因：这些方法可能会被对象自身的同名属性覆盖 - 比如 `{ hasOwnProperty: false }` 或者对象可能是一个 `null` 对象(`Object.create(null)`)

```js

// bad
console.log(object.hasOwnProperty(key))

// good
console.log(Object.prototype.hasOwnProperty.call(object, key))

// best
const has = Object.prototype.hasOwnProperty // cache the lookup once, in module scope.
console.log(has.call(object, key))
/* or */
import has from 'has' // https://www.npmjs.com/package/has
console.log(has(object, key))
```

- 优先使用对象展开运算符 `...` 来做对象浅拷贝而不是使用 `Object.assign`，使用对象剩余操作符来获得一个包含确定的剩余属性的新对象

```js
// very bad
const original = { a: 1, b: 2 }
const copy = Object.assign(original, { c: 3 }) // this mutates `original` ಠ_ಠ
delete copy.a // so does this

// bad
const original = { a: 1, b: 2 }
const copy = Object.assign({}, original, { c: 3 }) // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 }
const copy = { ...original, c: 3 } // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy // noA => { b: 2, c: 3 }
```

### 数组

- 请使用字面量值创建数组，eslint: [no-array-constructor](https://eslint.org/docs/rules/no-array-constructor.html)

  ```js
  // bad
  const items = new Array()

  // good
  const items = []
  ```

- 把一个可迭代的对象转换为数组时，使用展开运算符 `...` 而不是 `Array.from`

```js
const foo = document.querySelectorAll('.foo')

// good
const nodes = Array.from(foo)

// best
const nodes = [...foo]
```

- 使用数组的 `map` 等方法时，请使用 `return` 声明，如果是单一声明语句的情况，可省略 `return`

  ```js
  // good
  [1, 2, 3].map(x => {
    const y = x + 1
    return x * y
  })

  // good
  [1, 2, 3].map(x => x + 1)

  // bad
  const flat = {}
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item)
    flat[index] = flatten
  })

  // good
  const flat = {}
  [[0, 1], [2, 3], [4, 5]].reduce((memo, item, index) => {
    const flatten = memo.concat(item)
    flat[index] = flatten
    return flatten
  })

  // bad
  inbox.filter((msg) => {
    const { subject, author } = msg
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee'
    } else {
      return false
    }
  })

  // good
  inbox.filter((msg) => {
    const { subject, author } = msg
    if (subject === 'Mockingbird') {
      return author === 'Harper Lee'
    }

    return false
  })
  ```

- 如果一个数组有多行则要在数组的开括号后和闭括号前使用新行

```js
// bad
const arr = [
  [0, 1], [2, 3], [4, 5]
]

const objectInArray = [{
  id: 1
}, {
  id: 2
}]

const numberInArray = [
  1, 2
]

// good
const arr = [[0, 1], [2, 3], [4, 5]]

const objectInArray = [
  {
    id: 1
  },
  {
    id: 2
  }
]

const numberInArray = [
  1,
  2
]
```

### 解构赋值

- 当需要使用对象的多个属性时，请使用解构赋值，eslint: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

> 愿意：解构可以避免创建属性的临时引用

  ```js
  // bad
  function getFullName (user) {
    const firstName = user.firstName
    const lastName = user.lastName

    return `${firstName} ${lastName}`
  }

  // good
  function getFullName (user) {
    const { firstName, lastName } = user

    return `${firstName} ${lastName}`
  }

  // better
  function getFullName ({ firstName, lastName }) {
    return `${firstName} ${lastName}`
  }
  ```

- 当需要使用数组的多个值时，请同样使用解构赋值，eslint: [prefer-destructuring](https://eslint.org/docs/rules/prefer-destructuring)

  ```js
  const arr = [1, 2, 3, 4]

  // bad
  const first = arr[0]
  const second = arr[1]

  // good
  const [first, second] = arr
  ```


### 字符串

- 字符串统一使用单引号的形式 `''`，eslint: [quotes](https://eslint.org/docs/rules/quotes.html)

  ```js
  // bad
  const department = "JDC"

  // good
  const department = 'JDC'
  ```

- 程序化生成字符串时，请使用模板字符串，eslint: [prefer-template](http://eslint.org/docs/rules/prefer-template.html) [template-curly-spacing](https://eslint.org/docs/rules/template-curly-spacing)

  ```js
  const test = 'test'

  // bad
  const str = ['a', 'b', test].join()

  // bad
  const str = 'a' + 'b' + test

  // good
  const str = `ab${test}`
  ```

- 不要对字符串使用eval()，会导致太多漏洞， eslint: [no-eval](https://eslint.org/docs/rules/no-eval)

- 不要在字符串中使用不必要的转义字符， eslint: [no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)

```js
// bad
const foo = '\'this\' \i\s \"quoted\"'

// good
const foo = '\'this\' is "quoted"'
const foo = `my name is '${name}'`
```

### 函数

- 不要将参数命名为 `arguments`，会导致该参数的优先级高于每个函数作用域内原先存在的 `arguments` 对象

```js
// bad
function foo (name, options, arguments) {
  // ...
}

// good
function foo (name, options, args) {
  // ...
}
```


- 使用参数默认值语法而不是修改函数参数

```js
// really bad
function handleThings (opts) {
  // No! We shouldn't mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  opts = opts || {}
  // ...
}

// still bad
function handleThings (opts) {
  if (opts === void 0) {
    opts = {}
  }
  // ...
}

// good
function handleThings (opts = { }) {
  // ...
}
```

- 避免参数默认值的副作用

```js
let b = 1
// bad
function count (a = b++) {
  console.log(a)
}
count()  // 1
count()  // 2
count(3) // 3
count()  // 3
```

- 将参数默认值放在最后

```js
// bad
function handleThings (opts = {}, name) {
  // ...
}

// good
function handleThings (name, opts = {}) {
  // ...
}
```

### 箭头函数

- 当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记. eslint: [prefer-arrow-callback](http://eslint.org/docs/rules/prefer-arrow-callback.html), [arrow-spacing](https://eslint.org/docs/rules/arrow-spacing.html)

> 原因：它将创建在 `this` 上下文中执行的函数版本，通常是您想要的，并且语法更简洁

> 如果您有一个相当复杂的函数，则可以将该逻辑移到其自己的命名函数表达式中

```js
// bad
[1, 2, 3].map(function (x) {
  const y = x + 1
  return x * y
})

// good
[1, 2, 3].map((x) => {
  const y = x + 1
  return x * y
})
```


- 一旦表达式跨多行，使用圆括号包裹以便更好阅读

```js
// bad
['get', 'post', 'put'].map(httpMethod => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod
  )
)

// good
['get', 'post', 'put'].map(httpMethod => (
  Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod
  )
))
```


### 类&构造函数

- 避免类成员重复，eslint: [no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)

> 原因：重复的类成员声明会默认使用最后声明的，通常会导致 bug

```js
// bad
class Foo {
  bar () { return 1 }
  bar () { return 2 }
}

// good
class Foo {
  bar () { return 1 }
}

// good
class Foo {
  bar () { return 2 }
}
```

### 模块

- 使用标准的 ES6 模块语法 `import` 和 `export`

> 原因：模块是未来，让我们现在开始使用未来的特性

  ```js
  // bad
  const util = require('./util')
  module.exports = util

  // good
  import Util from './util'
  export default Util

  // better
  import { Util } from './util'
  export default Util
  ```


- 同个文件每个模块只允许 `import` 一次，有多个 `import` 请书写在一起，eslint: [no-duplicate-imports](https://eslint.org/docs/rules/no-duplicate-imports)

> 原因：这样可以让代码更易于维护

```js
// bad
import foo from 'foo'
// … some other imports … //
import { named1, named2 } from 'foo'

// good
import foo, { named1, named2 } from 'foo'

// good
import foo, {
  named1,
  named2
} from 'foo'
```

- 将所有 `import` 语句放在文件最前方，eslint: [import/imports-first](https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/first.md)

```js
// bad
import foo from 'foo'
foo.init()

import bar from 'bar'

// good
import foo from 'foo'
import bar from 'bar'

foo.init()
```

### 生成器

- 现阶段请不要使用生成器 `generator`

> 原因：因为不能很好地翻译成 ES5 代码

### 对象属性

- 当访问的属性是变量时使用 `[]`

```js
const luke = {
  jedi: true,
  age: 28,
}

function getProp (prop) {
  return luke[prop]
}

const isJedi = getProp('jedi')
```

### 变量声明

- 声明变量时，请使用 `const`、`let` 关键字，如果没有写关键字，变量就会暴露在全局上下文中，这样很可能会和现有变量冲突，另外，也很难明确该变量的作用域是什么。这里推荐使用 `const` 来声明变量，我们需要避免全局命名空间的污染。eslint: [no-undef](http://eslint.org/docs/rules/no-undef) [prefer-const](http://eslint.org/docs/rules/prefer-const)

  ```js
  // bad
  demo = new Demo()

  // good
  const demo = new Demo()
  ```

- 变量不要进行链式赋值

> 原因：变量链式赋值会创建隐藏的全局变量

```js
// bad
(function example() {
  // JavaScript interprets this as
  // let a = ( b = ( c = 1 ) );
  // The let keyword only applies to variable a; variables b and c become
  // global variables.
  let a = b = c = 1
}())

console.log(a) // throws ReferenceError
console.log(b) // 1
console.log(c) // 1

// good
(function example() {
  let a = 1
  let b = a
  let c = a
}())

console.log(a) // throws ReferenceError
console.log(b) // throws ReferenceError
console.log(c) // throws ReferenceError

// the same applies for `const`
```

- 不允许出现未被使用的变量，eslint: [no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)

> 原因：声明但未被使用的变量通常是不完全重构犯下的错误.这种变量在代码里浪费空间并会给读者造成困扰

```js
// bad

var some_unused_var = 42

// Write-only variables are not considered as used.
var y = 10
y = 5

// A read for a modification of itself is not considered as used.
var z = 0
z = z + 1

// Unused function arguments.
function getX (x, y) {
  return x
}

// good

function getXPlusY (x, y) {
  return x + y
}

const x = 1
const y = a + 2

alert(getXPlusY(x, y))

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
const { type, ...coords } = data
// 'coords' is now the 'data' object without its 'type' property.
```

### 比较运算符&相等

- 使用 `===` 和 `!==` 而非 `==` 和 `!=`，eslint: [eqeqeq](https://eslint.org/docs/rules/eqeqeq.html)

- 条件声明例如 `if` 会用 `ToBoolean` 这个抽象方法将表达式转成布尔值并遵循如下规则
  - `Objects` 等于 `true`
  - `Undefined` 等于 `false`
  - `Null` 等于 `false`
  - `Booleans` 等于 `布尔值`
  - `Numbers` 在 `+0`, `-0`, 或者 `NaN` 的情况下等于 `false`, 其他情况是 `true`
  - `Strings` 为 `''` 时等于 `false`, 否则是 `true`
  ```js
  if ([0] && []) {
    // true
    // 数组(即使是空数组)也是对象，对象等于true
  }
  ```

### 分号

- 我们遵循 `Standard` 的规范，不使用分号。

  > 关于应不应该使用分号的讨论有很多，本规范认为非必要的时候，应该不使用分号，好的 `JS` 程序员应该清楚场景下是一定要加分号的，相信你也是名好的开发者。

  ```js
  // bad
  const test = 'good';
  (function () {
    const str = 'hahaha';
  })()

  // good
  const test = 'good'
  ;(() => {
    const str = 'hahaha'
  })();
  ```

### 标准特性

为了代码的可移植性和兼容性，我们应该最大化的使用标准方法，例如优先使用 `string.charAt(3)` 而不是 `string[3]`