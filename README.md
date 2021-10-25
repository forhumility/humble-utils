<!--
 * @Author       : Humility
 * @Date         : 2021-10-25 08:40:28
 * @LastEditTime : 2021-10-25 17:48:24
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\README.md
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

Common application program interface

### Date

> dateFormat

``` javascript
dateFormat(date); // 1996-07-22 13:14:00
dateFormat(date,"yyyy-MM-dd"); // 1996-07-22
```

> dateOfYear

``` javascript
dateOfYear(date); // 204
```

> dateDiffer

``` javascript
dateDiffer(date1,date2); // 204
```

### Array

> shuffle

``` javascript
shuffle(arr); // arr shuffle
```

### Object

> isObjectEqual

``` javascript
isObjectEqual(obj1,obj2); // isObjectEqual
```

## License

> humble-utils is licensed under a [MIT](https://opensource.org/licenses/MIT/) License.
