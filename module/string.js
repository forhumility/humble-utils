/*
 * @Author       : Humility
 * @Date         : 2021-10-24 21:37:35
 * @LastEditTime : 2021-10-26 20:36:34
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\string.js
 * @Description  : string tools
 */
/**
 * 密码强度监测
 * @description: 强度 0、1、2、3、4
 * @param {String} pwd 密码
 * @return {Number} 密码强度
 */
export const checkPwd = (pwd) => {
    let Lv = 0;
    if (pwd.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(pwd)) {
        Lv++
    }
    if (/[a-z]/.test(pwd)) {
        Lv++
    }
    if (/[A-Z]/.test(pwd)) {
        Lv++
    }
    if (/[\.|-|_]/.test(pwd)) {
        Lv++
    }
    return Lv;
};
/**
 * 字符串去空格
 * @description: 去空格类型 1:所有空格 2:前后空格 3:前空格 4:后空格
 * @param {String} str 目标字符串
 * @param {Number} type 去空格类型
 * @return {String} 去除空格后的字符串
 */
export const trim = (str, type = 1) => {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
};
/**
 * 字符(英文)转换
 * @description: 转换类型 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
 * @param {String} str 目标字符串
 * @param {Number} type 转换类型
 * @return {String}
 */
export const changeCase = (str, type = 4) => {
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function(word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();
            });
        case 2:
            return str.replace(/\b\w+\b/g, function(word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function(word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase();
                }
            }).join('');
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
};
/**
 * 在字符串中插入新字符串
 * @param {String} soure 原字符串
 * @param {Number} index 目标位置
 * @param {String} newStr 需要插入的字符串
 * @return {String} 插入字符串后的新字符串
 */
export const insertStr = (soure, index = 1, newStr = '') => {
    let str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
};
/**
 * 16进制颜色转RGB/RGBA字符串
 * @param {String} val 16进制颜色
 * @param {Number} opa 透明度
 * @return {String} RGB/RGBA字符串
 */
export const hexToRGB = (val, opa = 1) => {
    let pattern = /^(#?)[a-fA-F0-9]{6}$/; //16进制颜色值校验规则
    let isOpa = typeof opa == 'number'; //判断是否有设置不透明度
    if (!pattern.test(val)) { //如果值不符合规则返回空字符
        return '';
    }
    let v = val.replace(/#/, ''); //如果有#号先去除#号
    let rgbArr = [];
    let rgbStr = '';
    for (let i = 0; i < 3; i++) {
        let item = v.substring(i * 2, i * 2 + 2);
        let num = parseInt(item, 16);
        rgbArr.push(num);
    }
    rgbStr = rgbArr.join();
    rgbStr = 'rgb' + (isOpa ? 'a' : '') + '(' + rgbStr + (isOpa ? ',' + opa : '') + ')';
    return rgbStr;
};
/**
 * RGB/RGBA字符串转16进制颜色
 * @param {Number} r 红色通道
 * @param {Number} g 绿色通道
 * @param {Number} b 蓝色通道
 * @return {String} 16进制颜色
 */
export const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);