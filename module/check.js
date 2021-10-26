/*
 * @Author       : Humility
 * @Date         : 2021-10-24 19:00:10
 * @LastEditTime : 2021-10-26 20:59:26
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\check.js
 * @Description  : check tools
 */
/**
 * 验证-邮箱
 * @param {String} str 邮箱
 * @return {Boolean} 验证结果
 */
export const isEmail = (str) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str)
};
/**
 * 验证-电话
 * @param {String} str 电话
 * @return {Boolean} 验证结果
 */
export const isMobile = (str) => {
    return /^1[0-9]{10}$/.test(str)
};
/**
 * 验证-手机号
 * @param {String} str 手机号
 * @return {Boolean} 验证结果
 */
export const isPhone = (str) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str)
};
/**
 * 验证-链接地址
 * @param {String} str 链接地址
 * @return {Boolean} 验证结果
 */
export const isURL = (str) => {
    return /^http[str]?:\/\/.*/.test(str)
};
/**
 * 验证-字符串
 * @param {String} target 字符串
 * @return {Boolean} 验证结果
 */
export const isString = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'String'
};
/**
 * 验证-数值
 * @param {String} target 数值
 * @return {Boolean} 验证结果
 */
export const isNumber = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Number'
};
/**
 * 验证-布尔型
 * @param {String} target 布尔型
 * @return {Boolean} 验证结果
 */
export const isBoolean = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Boolean'
};
/**
 * 验证-方法
 * @param {String} target 方法
 * @return {Boolean} 验证结果
 */
export const isFunction = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Function'
};
/**
 * 验证-空
 * @param {String} target 空
 * @return {Boolean} 验证结果
 */
export const isNull = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Null'
};
/**
 * 验证-未定义
 * @param {String} target 未定义
 * @return {Boolean} 验证结果
 */
export const isUndefined = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Undefined'
};
/**
 * 验证-对象
 * @param {String} target 对象
 * @return {Boolean} 验证结果
 */
export const isObject = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Object'
};
/**
 * 验证-数组
 * @param {String} target 数组
 * @return {Boolean} 验证结果
 */
export const isArray = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Array'
};
/**
 * 验证-日期
 * @param {String} target 日期
 * @return {Boolean} 验证结果
 */
export const isDate = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Date'
};
/**
 * 验证-正则
 * @param {String} target 正则
 * @return {Boolean} 验证结果
 */
export const isRegExp = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'RegExp'
};
/**
 * 验证-错误
 * @param {String} target 错误
 * @return {Boolean} 验证结果
 */
export const isError = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Error'
};
/**
 * 验证-唯一
 * @param {String} target 唯一
 * @return {Boolean} 验证结果
 */
export const isSymbol = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Symbol'
};
/**
 * 验证-Promise
 * @param {String} target Promise
 * @return {Boolean} 验证结果
 */
export const isPromise = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Promise'
};
export const UA = navigator.userAgent.toLowerCase();
/**
 * 微信
 * @return {Boolean} 验证结果
 */
export const isWeiXin = () => {
    return UA.match(/microMessenger/i) == 'micromessenger'
};
/**
 * 移动设备
 * @return {Boolean} 验证结果
 */
export const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(UA)
};
/**
 * QQ浏览器
 * @return {Boolean} 验证结果
 */
export const isQQBrowser = () => {
    return !!UA.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
};
/**
 * 爬虫
 * @return {Boolean} 验证结果
 */
export const isSpider = () => {
    return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(UA)
};
/**
 * IOS
 * @return {Boolean} 验证结果
 */
export const isIos = () => {
    let u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { // 安卓手机
        return false
    } else if (u.indexOf('iPhone') > -1) { // 苹果手机
        return true
    } else if (u.indexOf('iPad') > -1) { // iPad
        return false
    } else if (u.indexOf('Windows Phone') > -1) { // winphone手机
        return false
    } else {
        return false
    }
};
/**
 * PC
 * @return {Boolean} 验证结果
 */
export const isPC = () => {
    let userAgentInfo = navigator.userAgent;
    let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
};
/**
 * 综合验证
 * @description: phone:手机号码 tel:座机 ...
 * @param {String} str 要验证的字符串
 * @param {String} type 验证类型
 * @return {Boolean} 验证结果
 */
export const checkStr = (str, type = 'phone') => {
    switch (type) {
        case 'phone': // 手机号码
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
        case 'tel': // 座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card': // 身份证
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
        case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal': // 邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ': // QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email': // 邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money': // 金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL': // 网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP': // IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date': // 日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'number': // 数字
            return /^[0-9]$/.test(str);
        case 'english': // 英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': // 中文
            return /^[\\u4E00-\\u9FA5]+$/.test(str);
        case 'lower': // 小写
            return /^[a-z]+$/.test(str);
        case 'upper': // 大写
            return /^[A-Z]+$/.test(str);
        case 'HTML': // HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
};
/**
 * 严格身份证验证
 * @description: 仅中国大陆身份证号有效
 * @param {String} cId 身份证号
 * @return {Boolean} 是否为身份证号
 */
export const isCardID = (cId) => {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(cId)) {
        console.warn('你输入的身份证长度或格式错误')
        return false
    }
    // 身份证城市
    let aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    if (!aCity[parseInt(cId.substr(0, 2))]) {
        console.warn('你的身份证地区非法')
        return false
    }
    // 出生日期验证
    let sBirthday = (cId.substr(6, 4) + "-" + Number(cId.substr(10, 2)) + "-" + Number(cId.substr(12, 2))).replace(/-/g, "/"),
        d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
        console.warn('身份证上的出生日期非法')
        return false
    }
    // 身份证号码校验
    let sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432"
    for (let i = 0; i < cId.length - 1; i++) {
        sum += cId[i] * weights[i];
    }
    let last = codes[sum % 11]; // 计算出来的最后一位身份证号码
    if (cId[cId.length - 1] != last) {
        console.warn('你输入的身份证号非法')
        return false
    }
    return true
};