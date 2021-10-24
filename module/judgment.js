/*
 * @Author       : Humility
 * @Date         : 2021-10-24 19:00:10
 * @LastEditTime : 2021-10-24 20:30:01
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\judgment.js
 * @Description  : judgment tools
 */

/** 正则 */
export const isEmail = (str) => {
    return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(str)
};
export const isMobile = (str) => {
    return /^1[0-9]{10}$/.test(str)
};
export const isPhone = (str) => {
    return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(str)
};
export const isURL = (str) => {
    return /^http[str]?:\/\/.*/.test(str)
};
/** 数据类型 */
export const isString = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'String'
};
export const isNumber = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Number'
};
export const isBoolean = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Boolean'
};
export const isFunction = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Function'
};
export const isNull = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Null'
};
export const isUndefined = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Undefined'
};
export const isObj = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Object'
};
export const isArray = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Array'
};
export const isDate = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Date'
};
export const isRegExp = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'RegExp'
};
export const isError = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Error'
};
export const isSymbol = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Symbol'
};
export const isPromise = (target) => {
    return Object.prototype.toString.call(target).slice(8, -1) === 'Promise'
};
/** 客户端 */
export const UA = navigator.userAgent.toLowerCase();
export const isWeiXin = () => {
    return UA.match(/microMessenger/i) == 'micromessenger'
};
export const isDeviceMobile = () => {
    return /android|webos|iphone|ipod|balckberry/i.test(UA)
};
export const isQQBrowser = () => {
    return !!UA.match(/mqqbrowser|qzone|qqbrowser|qbwebviewtype/i)
};
export const isSpider = () => {
    return /adsbot|googlebot|bingbot|msnbot|yandexbot|baidubot|robot|careerbot|seznambot|bot|baiduspider|jikespider|symantecspider|scannerlwebcrawler|crawler|360spider|sosospider|sogou web sprider|sogou orion spider/.test(UA)
};
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
/** 综合  */
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
/** 严格身份证验证 */
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