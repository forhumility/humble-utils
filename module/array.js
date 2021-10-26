/*
 * @Author       : Humility
 * @Date         : 2021-10-23 23:12:04
 * @LastEditTime : 2021-10-26 20:58:54
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\array.js
 * @Description  : array tools
 */

/**
 * 洗牌算法
 * @param {Array} arr 需要打乱的数组
 * @return {Array} 打乱后的数组
 */
export const shuffle = (arr) => {
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
 * @param {Array} arr 目标数组
 * @param {*} val 需要判断的值
 * @return {Boolean}
 */
export const contains = (arr, val) => {
    return arr.indexOf(val) != -1 ? true : false;
};
/**
 * 数组排序
 * @description: 排序类型 1:降序 2:升序 3:随机
 * @param {Array} arr 需要排序的数组
 * @param {Number} type 排序类型
 * @return {Array} 排序后的数组
 */
export const sort = (arr, type = 1) => {
    return arr.sort((a, b) => {
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
 * @param {Array} arr 目标数组
 * @return {Array} 去除后的数组
 */
export const unique = (arr) => [...new Set(arr)];
/**
 * 两个数组的并集
 * @param {Array} arr1 第一个数组
 * @param {Array} arr2 第二个数组
 * @return {Array} 数组的并集
 */
export const union = (arr1, arr2) => [...arr1, ...arr2];
/**
 * 两个数组的交集
 * @param {Array} arr1 第一个数组
 * @param {Array} arr2 第二个数组
 * @return {Array} 数组的交集
 */
export const intersect = (arr1, arr2) => {
    let that = this;
    arr1 = this.unique(arr1);
    return this.map(arr1, function(o) {
        return that.contains(arr2, o) ? o : null;
    });
};
/**
 * 数组中删除第一个元素
 * @param {Array} arr 目标数组
 * @param {*} ele 需要删除的元素
 * @return {Array} 删除该数组第一个元素后的数组
 */
export const removeOne = (arr, ele) => {
    let index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
};
/**
 * 数组中删除某个元素
 * @param {Array} arr 目标数组
 * @param {*} ele 需要删除的元素
 * @return {Array} 删除该数组该元素后的数组
 */
export const removeAll = (arr, ele) => {
    let newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let a = arr[i];
        a != ele && newArr.push(a);
    }
    return newArr;
}