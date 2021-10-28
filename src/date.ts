/**
 * @Author       : Humility
 * @Date         : 2021-10-23 23:10:06
 * @LastEditTime : 2021-10-28 20:48:52
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\src\date.ts
 * @Description  : 日期
 */


/**
 * 将Date转换为指定格式
 * @param {Date} date 时间
 * @param {String} format 格式
 * @return {String} 指定格式的时间
 * @description: 年-yyyy 月-MM 日-dd 时-hh 分-mm 秒-ss 毫秒-SSS
 */
 export function dateFormat(date: Date, format = "yyyy-MM-dd hh:mm:ss") {
    // 格式配置项
    const options: any = {
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
/**
 * 日期位于一年中的第几天
 * @param {Date} date 日期
 * @return {Number} 在一年中的第几天
 */
export function dateOfYear(date: Date) {
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