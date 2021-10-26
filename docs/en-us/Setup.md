<!--
 * @Author       : Humility
 * @Date         : 2021-10-25 21:00:26
 * @LastEditTime : 2021-10-26 10:04:36
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\docs\Setup.md
 * @Description  : 开始
-->

#

## install

``` bash
npm i humble-utils --save
```

## import

``` javascript
import { dateFormat } from "humble-utils";
```

## using

``` javascript
let fmt;
fmt = dateFormat(new Date()); // "1996-07-22 13:14:00"
fmt = dateFormat(new Date(),"MM-dd"); // "07-22"
```
