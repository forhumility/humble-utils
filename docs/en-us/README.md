<!--
 * @Author       : Humility
 * @Date         : 2021-10-25 08:40:28
 * @LastEditTime : 2021-10-30 16:40:00
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\docs\en-us\README.md
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

- shuffle
- unique
- unique/union
- removeOne
- [more](https://forhumility.github.io/humble-utils/#/API?id=%e6%95%b0%e7%bb%84)

### Check

常用的各类验证

- pc、ios、WeChat...
- Date、Object、Number、RegExp...
- phone、email、card...
- [more](https://forhumility.github.io/humble-utils/#/API?id=%e9%aa%8c%e8%af%81)

### Date

日期相关工具方法

- format
- dateOfYear
- dateDiffer
- [more](https://forhumility.github.io/humble-utils/#/API?id=%e6%97%a5%e6%9c%9f)

### Object

对象工具方法

- isObjectEqual
- [more](https://forhumility.github.io/humble-utils/#/API?id=%e5%af%b9%e8%b1%a1)

### String

字符串相关

- trim
- changeCase
- insertStr
- hexToRGB/rgbToHex
- [more](https://forhumility.github.io/humble-utils/#/API?id=%e5%ad%97%e7%ac%a6%e4%b8%b2)

## License

> humble-utils is licensed under a [MIT](https://github.com/forhumility/humble-utils/blob/main/LICENSE) License.
