/**
 * @Author       : Humility
 * @Date         : 2021-10-23 23:12:04
 * @LastEditTime : 2021-10-30 14:44:20
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\src\array.ts
 * @Description  : 数组
 */


/**
 * 洗牌算法-把数组打乱顺序
 * @param {Array} arr 需要打乱的数组
 * @return {Array<any>} 打乱后的数组
 */
 export function shuffle(arr: Array<any>): Array<any> {
    let result = [],
        random;
    while (arr.length > 0) {
        random = Math.floor(Math.random() * arr.length);
        result.push(arr[random])
        arr.splice(random, 1)
    }
    return result;
};
/**
 * 判断数组中是否存在某个值
 * @param {Array<string|number|null>} arr 目标数组
 * @param {string|number|null} val 需要判断的值
 * @return {Boolean}
 */
export function contains(arr: Array<string|number|null>, val: string|number|null) {
    return arr.indexOf(val) != -1 ? true : false;
};
/**
 * 数组排序
 * @description: 排序类型 1:降序 2:升序 3:随机
 * @param {Array<string|number|null>} arr 需要排序的数组
 * @param {Number} type 排序类型
 * @return {Array<any>} 排序后的数组
 */
export function sort(arr: Array<string|number|null>, type = 1) {
    return arr.sort(function (a: any, b: any): any {
        switch (type) {
            case 1:
                return a - b;
            case 2:
                return b - a;
            case 3:
                return Math.random() - 0.5;
            default:
                return arr;
        }
    })
};
/**
 * 数组去重
 * @param {Array<string|number|null>} arr 目标数组
 * @return {Array<any>} 去除后的数组
 */
export function unique(arr: Array<string|number|null>) {
    return [...new Set(arr)];
};
/**
 * 两个数组的并集
 * @param {Array<any>} arr1 第一个数组
 * @param {Array<any>} arr2 第二个数组
 * @return {Array<any>} 数组的并集
 */
export function union(arr1: Array<any>, arr2: Array<any>) {
    return [...arr1, ...arr2]
};
/**
 * 两个数组的交集
 * @param {Array<any>} arr1 第一个数组
 * @param {Array<any>} arr2 第二个数组
 * @return {Array<any>} 数组的交集
 */
export function intersect(arr1: Array<any>, arr2: Array<any>) {
    return arr1.filter(item => {
        return arr2.indexOf(item) != -1;
    })
};
/**
 * 数组中删除第一个元素
 * @param {Array<any>} arr 目标数组
 * @param {any} ele 需要删除的元素
 * @return {Array<any>} 删除该数组第一个元素后的数组
 */
export function removeOne(arr: Array<any>, ele: any) {
    let index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
};
/**
 * 数组中删除某个元素
 * @param {Array<any>} arr 目标数组
 * @param {any} ele 需要删除的元素
 * @return {Array<any>} 删除该数组该元素后的数组
 */
export function removeAll(arr: Array<any>, ele: any) {
    let newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let a = arr[i];
        a != ele && newArr.push(a);
    }
    return newArr;
}