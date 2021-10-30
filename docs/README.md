<!--
 * @Author       : Humility
 * @Date         : 2021-10-25 08:40:28
 * @LastEditTime : 2021-10-30 16:40:31
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\docs\README.md
 * @Description  : README
-->

# Humble Utils

> A humble utils

## Setup

### install humble utils

``` bash
npm i humble-utils --save
```

### import date dateFormat

``` javascript
import { dateFormat } from "humble-utils";
```

### using date dateFormat

``` javascript
let fmt;
fmt = dateFormat(new Date()); // "1996-07-22 13:14:00"
fmt = dateFormat(new Date(),"MM-dd"); // "07-22"
```

## API

- Common application program interface.
- You can find for more details, API, and other docs on
[documentation](https://forhumility.github.io/humble-utils/) website.
- 如果github不能访问，请移步[国内站点](http://hu.newzoo.xyz/)。

### Array

数组相关方法

- 打乱数组
- 数组去重
- 交集/并集
- 删除某个元素
- [更多](http://hu.newzoo.xyz/#/API?id=%e6%95%b0%e7%bb%84)

### Check

常用的各类验证

- 当前环境（pc、ios、微信等）
- 变量类型（Date、Object、Number、RegExp等）
- 表单验证（手机、邮箱、密码强度、大陆身份证等）
- [更多](http://hu.newzoo.xyz/#/API?id=%e9%aa%8c%e8%af%81)

### Date

日期相关工具方法

- 格式化（format）
- 两个日期的间隔
- 日期在一年中的第几天
- [更多](http://hu.newzoo.xyz/#/API?id=%e6%97%a5%e6%9c%9f)

### Object

对象工具方法

- 两个对象键是否一致
- [更多](http://hu.newzoo.xyz/#/API?id=%e5%af%b9%e8%b1%a1)

### String

字符串相关

- 插入字符串
- 文本去空格
- 转换字母大小写
- 16进制颜色与rgba格式的转换
- [更多](http://hu.newzoo.xyz/#/API?id=%e5%ad%97%e7%ac%a6%e4%b8%b2)

## License

> humble-utils is licensed under a [MIT](https://github.com/forhumility/humble-utils/blob/main/LICENSE) License.
