
### 四. 注释规范
#### 4.1 注释的目的和原则
- 目的：提高代码的可读性，从而提高代码的可维护性
- 原则：
  如无必要，勿增注释 ( As short as possible )
  如有必要，尽量详尽 ( As long as necessary )
#### 4.2 务必添加注释列表
- 公共组件使用说明
- 各组件中重要函数或者类说明
- 复杂的业务逻辑处理说明
- 特殊情况的代码处理说明,对于代码中特殊用途的变量、存在临界值、函数中使用的 hack、使用了某种算法或思路等需要进行注释描述
- 多重 if 判断语句
#### 4.3 HTML文件注释
###### 4.3.1 单行注释
一般用于简单的描述，如某些状态描述、属性描述等。注释内容前后各一个空格字符，注释位于要注释代码的上面，单独占一行
```
正例：
<!-- Comment Text -->
<div>...</div>
反例：
<div>...</div><!-- Comment Text -->
```
###### 4.3.2 模块注释
一般用于描述模块的名称以及模块开始与结束的位置。注释内容前后各一个空格字符， <!-- Comment Text -->表示，模块与模块之间相隔一行
```
正例：
<!-- Comment Text A --> 
<div class="mod_a">
  ...
</div>
<!-- Comment Text A -->
 
<!-- Comment Text B --> 
<div class="mod_b">
  ...
</div>
<!-- Comment Text B -->

反例：
<!-- Comment Text A -->
<div class="mod_a">
  ...
</div>
<!-- Comment Text A -->
<!-- Comment Text B --> 
<div class="mod_b">
  ...
</div>
<!-- Comment Text B -->
```
#### 4.4 CSS 文件注释
###### 4.4.1 单行注释
注释内容第一个字符和最后一个字符都是一个空格字符，单独占一行，行与行之间相隔一行

```
正例：
/* Comment Text */ 
.jda {} 

/* Comment Text */ 
.jdb {}

反例：
/*Comment Text*/
.jdc {
  display: block;
}

.jdc {
  display: block;/*Comment Text*/
}

```
###### 4.4.2 模块注释
注释内容第一个字符和最后一个字符都是一个空格字符，/* 与 模块信息描述占一行，多个横线分隔符 - 与 */ 占一行，行与行之间相隔两行

```
正例：
/* Module A
---------------------------------------------------------------- */
.mod_a {}
/* Module B
---------------------------------------------------------------- */
.model_b {}

反例：

/* Module A ---------------------------------------------------- */
.mod_a {}
/* Module B ---------------------------------------------------- */
.mod_b {}
```
### 4.5 JavaScript 文件注释
###### 4.5.1 单行注释
单行注释使用 //，注释应单独一行写在被注释对象的上方，不要追加在某条语句的后面

```
正例：
// is current tab
const active = true

反例：
const active = true // is current tab
```
###### 4.5.2 多行注释
多行注释使用 /** … */，而不是多行的 //

```
正例：
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make (tag) {
  // ...

  return element
}

反例：
// make() returns a new element
// based on the passed in tag name
function make (tag) {
  // ...

  return element
}

```
###### 4.5.3 特殊标记
有时我们发现某个可能的 bug，但因为一些原因还没法修复；或者某个地方还有一些待完成的功能，这时我们需要使用相应的特殊标记注释来告知未来的自己或合作者。常用的特殊标记有两种：
- // FIXME : 说明问题是什么
    - // TODO : 说明还要做什么或者问题的解决方案

```
示例：
class Calculator extends Abacus {
  constructor () {
    super ()

      // FIXME: shouldn’t use a global here
      total = 0

      // TODO: total should be configurable by an options param
      this.total = 0
  }
}
```
### 4.6 文档类注释
文档类注释，如函数、类、文件、事件等；都使用 jsdoc 规范

```
示例：
/**
 * Book类，代表一个书本.
 * @constructor
 * @param {string} title - 书本的标题.
 * @param {string} author - 书本的作者.
 */
function Book (title, author) {
  this.title = title
  this.author = author
}

Book.prototype = {
  /**
   * 获取书本的标题
   * @returns {string|*}
   */
  getTitle: function () {
    return this.title
  },
  /**
   * 设置书本的页数
   * @param pageNum {number} 页数
   */
  setPageNum: function (pageNum) {
    this.pageNum=pageNum
  }
}

```