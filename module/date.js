/*
 * @Author       : Humility
 * @Date         : 2021-10-23 23:10:06
 * @LastEditTime : 2021-10-24 22:07:46
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\date.js
 * @Description  : date tools
 */
/**
 * @description: 将Date转换为指定格式
 * @param {Date} date 时间
 * @param {string} format 格式
 * @return {string} 指定格式的时间
 */
export const dateFormat = (date, format = "yyyy-MM-dd hh:mm:ss") => {
    // 格式配置项
    const options = {
        "yyyy+": date.getFullYear().toString(), // 年：4位
        "yy+": date.getFullYear().toString().substring(2, 4), // 年：2位
        "M+": (date.getMonth() + 1).toString(), // 月
        "d+": date.getDate().toString(), // 日
        "h+": date.getHours().toString(), // 时
        "m+": date.getMinutes().toString(), // 分
        "s+": date.getSeconds().toString(), // 秒
        "S+": date.getMilliseconds().toString(), // 毫秒
    };
    let result; // 匹配结果
    for (let key in options) {
        result = new RegExp("(" + key + ")").exec(format);
        if (result) {
            format = format.replace(result[1], (result[1].length == 1) ? (options[key]) : (options[key].padStart(result[1].length, "0")))
        };
    };
    return format;
};
// 查找日期位于一年中的第几天
export const dateOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
// 两个日期间相差多少天
export const dateDiffer = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);