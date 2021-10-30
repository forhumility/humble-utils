/**
 * @Author       : Humility
 * @Date         : 2021-10-23 23:10:06
 * @LastEditTime : 2021-10-30 16:52:42
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\src\date.ts
 * @Description  : 日期
 */


import { isDate } from './check'
/**
 * 将Date转换为指定格式
 * @param {Date} date 时间
 * @param {String} format 格式（默认：yyyy-MM-dd hh:mm:ss）
 * @param {String} language 语言地及区编码（默认：本地语言）
 * @return {String} 指定格式的时间
 * @description: 年-yyyy 季度-q 星期-EE 月-MM 日-dd 时-hh 分-mm 秒-ss 毫秒-SSS
 */
export function dateFormat(date: Date, format = "yyyy-MM-dd hh:mm:ss", language = navigator.language) {
    const weekZH = {
        0: "日",
        1: "一",
        2: "二",
        3: "三",
        4: "四",
        5: "五",
        6: "六"
    };
    const weekEN = {
        0: ["Sun", "SUN", "Sunday"],
        1: ["Mon", "MON", "Monday"],
        2: ["Tue", "TUE", "Tuesday"],
        3: ["Wed", "WED", "Wednesday"],
        4: ["Thu", "THU", "Thursday"],
        5: ["Fri", "FRI", "Friday"],
        6: ["Sat", "SAT", "Saturday"]
    };
    // 格式配置项
    const options: any = {
        "yyyy+": date.getFullYear().toString(), // 年：4位
        "yy+": date.getFullYear().toString().substring(2, 4), // 年：2位
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度
        "M+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "h+": date.getHours().toString(), // 时
        "m+": date.getMinutes().toString(), // 分
        "s+": date.getSeconds().toString(), // 秒
        "S+": date.getMilliseconds().toString(), // 毫秒
    };
    let result; // 匹配结果
    // 星期匹配
    if (/(E+)/.test(format) && language == 'zh-CN') {
        format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + weekZH[date.getDay()]);
    } else if (/(E+)/.test(format)) {
        format = format.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? weekEN[date.getDay()][2] : weekEN[date.getDay()][1]) : weekEN[date.getDay()][0]));
    };
    for (let key in options) {
        result = new RegExp("(" + key + ")").exec(format);
        if (result) {
            format = format.replace(result[1], (result[1].length == 1) ? (options[key]) : (options[key].padStart(result[1].length, "0")))
        };
    };
    return format;
};
/**
 * 日期位于一年中的第几天
 * @param {Date | string | number} date 日期
 * @return {Number} 在一年中的第几天
 */
export function dateOfYear(date: Date) {
    let isDateType: boolean = isDate(date);
    date = isDateType ? date : new Date(date);
    return Math.ceil((Date.parse(date.toString()) - Date.parse(new Date(date.getFullYear(), 0, 0).toString())) / 1000 / 60 / 60 / 24);
};
/**
 * 两个日期间相差多少天
 * @param {Date} date1 日期1
 * @param {Date} date2 日期2
 * @return {Number} 相差天数
 */
export function dateDiffer(date1: Date, date2: Date) {
    return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);
}
