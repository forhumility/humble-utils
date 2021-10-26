<!--
 * @Author       : Humility
 * @Date         : 2021-10-25 21:00:26
 * @LastEditTime : 2021-10-26 14:24:59
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\docs\Setup.md
 * @Description  : 开始
-->

#

## 安装

``` bash
npm i humble-utils --save
```

## 导入

``` javascript
// 示例：

import { dateFormat } from "humble-utils";
```

## 使用

``` javascript
// 示例：

let fmt;

fmt = dateFormat(new Date()); // "1996-07-22 13:14:00"

fmt = dateFormat(new Date(),"MM-dd"); // "07-22"
```
