
### 六. CSS规范
#### 6.1 命名
> ID 和 class 的名称总是使用可以反应元素目的和用途的名称，或其他通用的名称，代替表象和晦涩难懂的名称
- 类名使用小写字母，以中划线分隔
- id 采用驼峰式命名
- scss 中的变量、函数、混合、placeholder 采用驼峰式命名
```
//不推荐
.fw-800 {
  font-weight: 800;
}

.red {
  color: red;
}

//推荐
.heavy {
  font-weight: 800;
}

.important {
  color: red;
}

```
#### 6.2 选择器尽量使用缩写属性
```
//不推荐
border-top-style: none;
font-family: palatino, georgia, serif;
font-size: 100%;
line-height: 1.6;
padding-bottom: 2em;
padding-left: 1em;
padding-right: 1em;
padding-top: 0;

//推荐
border-top: 0;
font: 100%/1.6 palatino, georgia, serif;
padding: 0 1em 2em;


```

###### 6.3 每个选择器及属性独占一行
```
//不推荐
div{
  padding-bottom: 0px;
  margin: 0em;
}

//推荐
div{
  padding-bottom: 0;
  margin: 0;
}

```


#### 6.4 省略0后面的单位
```
//不推荐
div{
  padding-bottom: 0px;
  margin: 0em;
}

//推荐
div{
  padding-bottom: 0;
  margin: 0;
}

```

#### 6.5 避免使用ID选择器及全局标签选择器防止污染全局样式
```
//不推荐
#header{
  padding-bottom: 0px;
  margin: 0em;
}

//推荐
.header{
  padding-bottom: 0px;
  margin: 0em;
}

```