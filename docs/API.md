<!--
 * @Author       : Humility
 * @Date         : 2021-10-25 21:00:42
 * @LastEditTime : 2022-07-18 08:54:58
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\docs\API.md
 * @Description  : api
-->

#

## 数组

<a name="shuffle"></a>

### shuffle(arr) ⇒ <code>Array</code>

洗牌算法-把数组打乱顺序

**Kind**: global function

**Returns**: <code>Array</code> - 打乱后的数组

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 需要打乱的数组 |

<a name="contains"></a>

### contains(arr, val) ⇒ <code>Boolean</code>

判断数组中是否存在某个值

**Kind**: global function

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 目标数组 |
| val | <code>string</code> \| <code>number</code> \| <code>null</code> | 需要判断的值 |

<a name="sort"></a>

### sort(arr, type) ⇒ <code>Array</code>

数组排序

**Kind**: global function

**Returns**: <code>Array</code> - 排序后的数组

**Description:**: 排序类型 1:降序 2:升序 3:随机

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 需要排序的数组 |
| type | <code>Number</code> | 排序类型 |

<a name="unique"></a>

### unique(arr) ⇒ <code>Array</code>

数组去重

**Kind**: global function

**Returns**: <code>Array</code> - 去除后的数组

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array.&lt;(string\|number\|null)&gt;</code> | 目标数组 |

<a name="union"></a>

### union(arr1, arr2) ⇒ <code>Array</code>

两个数组的并集

**Kind**: global function

**Returns**: <code>Array</code> - 数组的并集

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array</code> | 第一个数组 |
| arr2 | <code>Array</code> | 第二个数组 |

<a name="intersect"></a>

### intersect(arr1, arr2) ⇒ <code>Array</code>

两个数组的交集

**Kind**: global function

**Returns**: <code>Array</code> - 数组的交集

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array</code> | 第一个数组 |
| arr2 | <code>Array</code> | 第二个数组 |

<a name="removeOne"></a>

### removeOne(arr, ele) ⇒ <code>Array</code>

数组中删除第一个元素

**Kind**: global function

**Returns**: <code>Array</code> - 删除该数组第一个元素后的数组

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 目标数组 |
| ele | <code>any</code> | 需要删除的元素 |

<a name="removeAll"></a>

### removeAll(arr, ele) ⇒ <code>Array</code>

数组中删除某个元素

**Kind**: global function

**Returns**: <code>Array</code> - 删除该数组该元素后的数组

| Param | Type | Description |
| --- | --- | --- |
| arr | <code>Array</code> | 目标数组 |
| ele | <code>any</code> | 需要删除的元素 |

## 验证

<a name="isWeiXin"></a>

### isWeiXin ⇒ <code>Boolean</code>

微信

**Kind**: global constant

**Returns**: <code>Boolean</code> - 验证结果

<a name="isDeviceMobile"></a>

### isDeviceMobile ⇒ <code>Boolean</code>

移动设备

**Kind**: global constant

**Returns**: <code>Boolean</code> - 验证结果

<a name="isQQBrowser"></a>

### isQQBrowser ⇒ <code>Boolean</code>

QQ浏览器

**Kind**: global constant

**Returns**: <code>Boolean</code> - 验证结果

<a name="isSpider"></a>

### isSpider ⇒ <code>Boolean</code>

爬虫

**Kind**: global constant

**Returns**: <code>Boolean</code> - 验证结果

<a name="isIos"></a>

### isIos ⇒ <code>Boolean</code>

IOS

**Kind**: global constant

**Returns**: <code>Boolean</code> - 验证结果

<a name="isPC"></a>

### isPC ⇒ <code>Boolean</code>

PC

**Kind**: global constant

**Returns**: <code>Boolean</code> - 验证结果


<a name="isEmail"></a>

### isEmail(str) ⇒ <code>Boolean</code>

验证-邮箱

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 邮箱 |

<a name="isMobile"></a>

### isMobile(str) ⇒ <code>Boolean</code>

验证-移动电话（手机）

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 电话号码 |

<a name="isPhone"></a>

### isPhone(str) ⇒ <code>Boolean</code>

验证-固定电话

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 电话号码 |

<a name="checkPwd"></a>

### checkPwd(pwd) ⇒ <code>Number</code>

密码强度监测

**Kind**: global function

**Returns**: <code>Number</code> - 密码强度

**Description:**: 强度 0、1、2、3、4


| Param | Type | Description |
| --- | --- | --- |
| pwd | <code>String</code> | 密码 |

<a name="isURL"></a>

### isURL(str) ⇒ <code>Boolean</code>

验证-链接地址

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 链接地址 |

<a name="isString"></a>

### isString(target) ⇒ <code>Boolean</code>

验证-字符串

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 字符串 |

<a name="isNumber"></a>

### isNumber(target) ⇒ <code>Boolean</code>

验证-数值

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 数值 |

<a name="isBoolean"></a>

### isBoolean(target) ⇒ <code>Boolean</code>

验证-布尔型

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 布尔型 |

<a name="isOdd"></a>

## isOdd(数字) ⇒ <code>boolean</code>

验证奇偶数

**Kind**: global function
**Returns**: <code>boolean</code> - 是否为奇数
**Description:**: 验证奇偶数

| Param | Type |
| --- | --- |
| 数字 | <code>string</code> |

<a name="isFunction"></a>

### isFunction(target) ⇒ <code>Boolean</code>

验证-方法

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 方法 |

<a name="isNull"></a>

### isNull(target) ⇒ <code>Boolean</code>

验证-空

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 空 |

<a name="isUndefined"></a>

### isUndefined(target) ⇒ <code>Boolean</code>

验证-未定义

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 未定义 |

<a name="isObject"></a>

### isObject(target) ⇒ <code>Boolean</code>

验证-对象

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 对象 |

<a name="isArray"></a>

### isArray(target) ⇒ <code>Boolean</code>

验证-数组

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 数组 |

<a name="isDate"></a>

### isDate(target) ⇒ <code>Boolean</code>

验证-日期

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 日期 |

<a name="isRegExp"></a>

### isRegExp(target) ⇒ <code>Boolean</code>

验证-正则

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 正则 |

<a name="isError"></a>

### isError(target) ⇒ <code>Boolean</code>

验证-错误

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 错误 |

<a name="isSymbol"></a>

### isSymbol(target) ⇒ <code>Boolean</code>

验证-唯一

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | 唯一 |

<a name="isPromise"></a>

### isPromise(target) ⇒ <code>Boolean</code>

验证-Promise

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果


| Param | Type | Description |
| --- | --- | --- |
| target | <code>String</code> | Promise |

<a name="checkStr"></a>

### checkStr(str, type) ⇒ <code>Boolean</code>

综合验证

**Kind**: global function

**Returns**: <code>Boolean</code> - 验证结果

**Description:**: phone:手机号码 tel:座机 ...


| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 要验证的字符串 |
| type | <code>String</code> | 验证类型 |

<a name="isCardID"></a>

### isCardID(cId) ⇒ <code>Boolean</code>

严格身份证验证

**Kind**: global function

**Returns**: <code>Boolean</code> - 是否为身份证号

**Description:**: 仅中国大陆身份证号有效


| Param | Type | Description |
| --- | --- | --- |
| cId | <code>String</code> | 身份证号 |

## 日期

<a name="dateFormat"></a>

### dateFormat(date, format) ⇒ <code>String</code>

将Date转换为指定格式

**Kind**: global function

**Returns**: <code>String</code> - 指定格式的时间

**Description:**: 年-yyyy 月-MM 日-dd 时-hh 分-mm 秒-ss 毫秒-SSS

| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | 时间 |
| format | <code>String</code> | 格式 |

<a name="dateOfYear"></a>

### dateOfYear(date) ⇒ <code>Number</code>

日期位于一年中的第几天

**Kind**: global function

**Returns**: <code>Number</code> - 在一年中的第几天


| Param | Type | Description |
| --- | --- | --- |
| date | <code>Date</code> | 日期 |

<a name="dateDiffer"></a>

### dateDiffer(date1, date2) ⇒ <code>Number</code>

两个日期间相差多少天

**Kind**: global function

**Returns**: <code>Number</code> - 相差天数


| Param | Type | Description |
| --- | --- | --- |
| date1 | <code>Date</code> | 日期1 |
| date2 | <code>Date</code> | 日期2 |

## 对象

<a name="isObjectEqual"></a>

### isObjectEqual(obj1, obj2) ⇒ <code>Boolean</code>

判断两个对象是否键值相同

**Kind**: global function

**Returns**: <code>Boolean</code> - 是否相同

**Description:**: 判断两个对象是否键值相同


| Param | Type | Description |
| --- | --- | --- |
| obj1 | <code>Object</code> | 第一个对象 |
| obj2 | <code>Object</code> | 第二个对象 |

## 字符串

<a name="trim"></a>

### trim(str, type) ⇒ <code>String</code>

字符串去空格

**Kind**: global function

**Returns**: <code>String</code> - 去除空格后的字符串

**Description:**: 去空格类型 1:所有空格 2:前后空格 3:前空格 4:后空格


| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 目标字符串 |
| type | <code>Number</code> | 去空格类型 |

<a name="changeCase"></a>

### changeCase(str, type) ⇒ <code>String</code>

字符(英文)转换

**Kind**: global function

**Description:**: 转换类型 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写


| Param | Type | Description |
| --- | --- | --- |
| str | <code>String</code> | 目标字符串 |
| type | <code>Number</code> | 转换类型 |

<a name="insertStr"></a>

### insertStr(soure, index, newStr) ⇒ <code>String</code>

在字符串中插入新字符串

**Kind**: global function

**Returns**: <code>String</code> - 插入字符串后的新字符串


| Param | Type | Description |
| --- | --- | --- |
| soure | <code>String</code> | 原字符串 |
| index | <code>Number</code> | 目标位置 |
| newStr | <code>String</code> | 需要插入的字符串 |

<a name="hexToRGB"></a>

### hexToRGB(val, opa) ⇒ <code>String</code>

16进制颜色转RGB/RGBA字符串

**Kind**: global function

**Returns**: <code>String</code> - RGB/RGBA字符串


| Param | Type | Description |
| --- | --- | --- |
| val | <code>String</code> | 16进制颜色 |
| opa | <code>Number</code> | 透明度 |

<a name="rgbToHex"></a>

### rgbToHex(r, g, b) ⇒ <code>String</code>

RGB/RGBA字符串转16进制颜色

**Kind**: global function

**Returns**: <code>String</code> - 16进制颜色


| Param | Type | Description |
| --- | --- | --- |
| r | <code>Number</code> | 红色通道 |
| g | <code>Number</code> | 绿色通道 |
| b | <code>Number</code> | 蓝色通道 |
