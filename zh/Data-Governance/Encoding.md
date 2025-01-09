
### 五. 编码规范
#### 5.1 命名
1. 采用小写驼峰命名 lowerCamelCase，代码中的命名均不能以下划线，也不能以下划线或美元符号结束
2. 方法名、参数名、成员变量、局部变量都统一使用 lowerCamelCase 风格
3. method 方法命名使用 动词 或者 动词+名词 形式
4. 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚，不要嫌名字长

```
正例： MAX_STOCK_COUNT

反例： MAX_COUNT
```

#### 5.2 代码格式
1. 使用 2 个空格进行缩进
2. 不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以提升可读性

#### 5.3 类型
##### 5.3.1 原始类型: 存取原始类型直接作用于值本身
- 布尔类型
- Null 类型
- Undefined 类型
- 数字类型
- BigInt 类型
- 字符串类型
- 符号类型 Symbol
##### 5.3.2 复杂类型: 访问复杂类型作用于值的引用
- object
- array
- function

#### 5.4 引用
##### 5.4.1 const 和 let 都是块级作用域，var 是函数级作用域
```
{
  let a = 1
  const b = 1
}
console.log(a) // ReferenceError
console.log(b) // ReferenceError

```
##### 5.4.2 对所有引用都使用 const，不要使用 var
```
// 不推荐
var a = 1
var b = 2

// 推荐
const a = 1
const b = 2

```
##### 5.4.3 如果引用是可变动的，使用 let 代替 var
```
// 不推荐
var count = 1
if (count < 10) {
  count += 1
}

// 推荐
let count = 1
if (count < 10) {
  count += 1
}

```

#### 5.5 对象
##### 5.5.1 请使用字面量值创建对象
```
// 不推荐
const a = new Object{}

// 推荐
const a = {}

```

##### 5.5.2 别使用保留字作为对象的键值
```
// 不推荐
const a = {
  default: {},  // default 是保留字
  common: {}
}

// 推荐
const a = {
  defaults: {},
  common: {}
}

```

##### 5.5.3 当使用动态属性名创建对象时，请使用对象计算属性名来进行创建
```
function getKey(k) {
  return `a key named ${k}`
}

// 不推荐
const obj = {
  id: 5,
  name: 'San Francisco'
};
obj[getKey('enabled')] = true

// 推荐
const obj = {
  id: 5,
  name: 'San Francisco',
  [getKey('enabled')]: true
};


```

##### 5.5.4 使用对象方法的简写方式
```
// 不推荐
const item = {
  value: 1,

  addValue: function (val) {
    return item.value + val
  }
}

// 推荐
const item = {
  value: 1,

  addValue (val) {
    return item.value + val
  }
}


```

##### 5.5.5 使用对象属性值的简写方式
```
const job = 'FrontEnd'

// 不推荐
const item = {
  job: job
}

// 推荐
const item = {
  job
}

```

##### 5.5.6 将简写的对象属性分组后统一放到对象声明的开头
```
const job = 'FrontEnd'
const department = 'JDC'

// 不推荐
const item = {
  sex: 'male',
  job,
  age: 25,
  department
}

// 推荐
const item = {
  job,
  department,
  sex: 'male',
  age: 25
}

```

##### 5.5.7 只对非法标识符的属性使用引号
```
// 不推荐
const bad = {
  'foo': 3,
  'bar': 4,
  'data-blah': 5
}

// 推荐
const good = {
  foo: 3,
  bar: 4,
  'data-blah': 5
}

```

##### 5.5.8 优先使用对象展开运算符 ... 来做对象浅拷贝而不是使用 Object.assign，使用对象剩余操作符来获得一个包含确定的剩余属性的新对象
```
// 非常不推荐
const original = { a: 1, b: 2 }
const copy = Object.assign(original, { c: 3 }) 
delete copy.a

// 不推荐
const original = { a: 1, b: 2 }
const copy = Object.assign({}, original, { c: 3 }) // copy => { a: 1, b: 2, c: 3 }

// 推荐
const original = { a: 1, b: 2 }
const copy = { ...original, c: 3 } // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy // noA => { b: 2, c: 3 }

```

#### 5.6 数组
##### 5.6.1 请使用字面量值创建数组
```
// 不推荐
const items = new Array()

// 推荐
const items = []

```
##### 5.6.2 向数组中添加元素时，请使用 push 方法
```
const items = []

// 不推荐
items[items.length] = 'test'

// 推荐
items.push('test')

```

##### 5.6.3 使用展开运算符 ... 复制数组
```
// 不推荐
const items = []
const itemsCopy = []
const len = items.length
let i
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i]
}

// 推荐
itemsCopy = [...items]

```

##### 5.6.4 把一个可迭代的对象转换为数组时，使用展开运算符 ... 而不是 Array.from
```
const foo = document.querySelectorAll('.foo')

// 不推荐
const nodes = Array.from(foo)

// 推荐
const nodes = [...foo]

```

##### 5.6.7 使用 Array.from 来将一个类数组对象转换为数组
```
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 }

// 不推荐
const arr = Array.prototype.slice.call(arrLike)

// 推荐
const arr = Array.from(arrLike)

```

#### 5.7 解构赋值
##### 5.7.1 当需要使用对象的多个属性时，请使用解构赋值
```
// 不推荐
function getFullName (user) {
  const firstName = user.firstName
  const lastName = user.lastName

  return `${firstName} ${lastName}`
}

// 推荐
function getFullName (user) {
  const { firstName, lastName } = user

  return `${firstName} ${lastName}`
}

// 强烈推荐
function getFullName ({ firstName, lastName }) {
  return `${firstName} ${lastName}`
}

```

##### 5.7.2 当需要使用数组的多个值时，请同样使用解构赋值
```
const arr = [1, 2, 3, 4]

// 不推荐
const first = arr[0]
const second = arr[1]

// 推荐
const [first, second] = arr

```

##### 5.7.3 函数需要回传多个值时，请使用对象的解构，而不是数组的解构
```
// 不推荐
function doSomething () {
  return [top, right, bottom, left]
}

// 如果是数组解构，那么在调用时就需要考虑数据的顺序
const [top, xx, xxx, left] = doSomething()

// 推荐
function doSomething () {
  return { top, right, bottom, left }
}

// 此时不需要考虑数据的顺序
const { top, left } = doSomething()

```


#### 5.8 字符串
##### 5.8.1 字符串统一使用单引号的形式 ''

##### 5.8.2 字符串太长的时候，请不要使用字符串连接符换行 \，而是使用 +

##### 5.8.3 程序化生成字符串时，请使用模板字符串
```
const test = 'test'

// 不推荐
const str = ['a', 'b', test].join()

// 不推荐
const str = 'a' + 'b' + test

// 推荐
const str = `ab${test}`

```
##### 5.8.4 不要对字符串使用eval()，会导致太多漏洞

##### 5.8.5 不要在字符串中使用不必要的转义字符
```
// 不推荐
const foo = '\'this\' \i\s \"quoted\"'

// 推荐
const foo = '\'this\' is "quoted"'
const foo = `my name is '${name}'`

```

#### 5.9 函数
##### 5.9.1 不要使用Function构造函数创建函数
> 此方式创建函数和对字符串使用 eval() 一样会产生漏洞
```
// 不推荐
const add = new Function('a', 'b', 'return a + b')

// 不推荐
const subtract = Function('a', 'b', 'return a - b')

```
##### 5.9.2 在函数签名中使用空格
```
const f = function(){}
const g = function (){}
const h = function() {}

// 推荐
const x = function b () {}
const y = function a () {}

```

##### 5.9.3 不要在非函数代码块（if , while 等）中声明函数
```
// 不推荐
if (isUse) {
  function test () {
    // do something
  }
}

// 推荐
let test
if (isUse) {
  test = () => {
    // do something
  }
}

```
##### 5.9.4 不要将参数命名为 arguments，会导致该参数的优先级高于每个函数作用域内原先存在的 arguments 对象
```
// 不推荐
function foo (name, options, arguments) {
  // ...
}

// 推荐
function foo (name, options, args) {
  // ...
}

```

#### 5.10 箭头函数
##### 5.10.1 当你必须使用函数表达式（传递匿名函数）时，使用箭头函数标记
```
// 不推荐
[1, 2, 3].map(function (x) {
  const y = x + 1
  return x * y
})

// 推荐
[1, 2, 3].map((x) => {
  const y = x + 1
  return x * y
})

```


#### 5.11 类&构造函数
##### 5.11.1 使用 class，避免直接操作 prototype
```
// 不推荐
function Queue (contents = []) {
  this._queue = [..contents]
}
Queue.prototype.pop = function () {
  const value = this._queue[0]
  this._queue.splice(0, 1)
  return value
}

// 推荐
class Queue {
  constructor (contents = []) {
    this._queue = [...contents]
  }

  pop () {
    const value = this._queue[0]
    this._queue.splice(0, 1)
    return value
  }
}


```

##### 5.11.2 使用 extends 来实现继承
```
// 不推荐
const inherits = require('inherits')
function PeekableQueue(contents) {
  Queue.apply(this, contents)
}
inherits(PeekableQueue, Queue)
PeekableQueue.prototype.peek = function () {
  return this.queue[0]
}

// 推荐
class PeekableQueue extends Queue {
  peek () {
    return this.queue[0]
  }
}

```
##### 5.11.3 避免类成员重复
```
class Foo {
  bar () { return 1 }
  bar () { return 2 }
}

```

#### 5.12 模块
##### 5.12.1 使用标准的 ES6 模块语法 import 和 export
```
// 不推荐
const util = require('./util')
module.exports = util

// 推荐
import Util from './util'
export default Util

// 强烈推荐
import { Util } from './util'
export default Util

```

##### 5.12.2 不要使用 import 的通配符 *，这样可以确保你只有一个默认的 export
```
// 不推荐
import * as Util from './util'

// 推荐
import Util from './util'

```

##### 5.12.3 同个文件每个模块只允许 import 一次，有多个 import 请书写在一起
```
// 不推荐
import foo from 'foo'
// … some other imports … //
import { named1, named2 } from 'foo'

// 推荐
import foo, { named1, named2 } from 'foo'

// 推荐
import foo, {
  named1,
  named2
} from 'foo'

```
##### 5.12.4 将所有 import 语句放在文件最前方

#### 5.13 对象属性
##### 5.13.1 使用 . 来访问对象属性
```
const joke = {
  name: 'haha',
  age: 28
}

// 不推荐
const name = joke['name']

// 推荐
const name = joke.name

```

##### 5.13.2 当访问的属性是变量时使用 []
```
const luke = {
  jedi: true,
  age: 28,
}

function getProp (prop) {
  return luke[prop]
}

const isJedi = getProp('jedi')

```

#### 5.14 变量声明
##### 5.14.1 变量不要进行链式赋值
> 变量链式赋值会创建隐藏的全局变量
```
// 不推荐
(function example() {
  let a = b = c = 1
}())

console.log(a) // throws ReferenceError
console.log(b) // 1
console.log(c) // 1

// 推荐
(function example() {
  let a = 1
  let b = a
  let c = a
}())

console.log(a) // throws ReferenceError
console.log(b) // throws ReferenceError
console.log(c) // throws ReferenceError

```
##### 5.14.2 不允许出现未被使用的变量
> 未被使用变量在代码里浪费空间并会给读者造成困扰

#### 5.15 比较运算符&相等
##### 5.15.1 使用 === 和 !== 而非 == 和 !=
##### 5.15.2 条件声明例如 if 会用 ToBoolean 这个抽象方法将表达式转成布尔值并遵循如下规则
- Objects 等于 true
- Undefined 等于 false
- Null 等于 false
- Booleans 等于 布尔值
- Numbers 在 +0, -0, 或者 NaN 的情况下等于 false, 其他情况是 true
- Strings为''时等于false，否则是true
#### 5.16 eval()
> 禁止使用eval()方法
#### 5.17 with()
> with 方法会产生神奇的作用域,禁止使用
#### 5.18 修改内置对象的原型
> 不要修改内置对象，如 Object 和 Array
