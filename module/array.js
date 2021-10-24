/*
 * @Author       : Humility
 * @Date         : 2021-10-23 23:12:04
 * @LastEditTime : 2021-10-24 22:18:30
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\array.js
 * @Description  : array tools
 */

// 洗牌算法
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
// 判断数组中是否存在某个值
export const contains = (arr, val) => {
    return arr.indexOf(val) != -1 ? true : false;
};
// 排序 type 1:降序 2:升序 3:随机
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
// 去重
export const unique = (arr) => [...new Set(arr)];
// 并集
export const union = (a, b) => [...a, ...b];
// 交集
export const intersect = (a, b) => {
    let that = this;
    a = this.unique(a);
    return this.map(a, function(o) {
        return that.contains(b, o) ? o : null;
    });
};
// 数组中删除第一个元素
export const removeOne = (arr, ele) => {
    let index = arr.indexOf(ele);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
};
// 数组中删除所有元素
export const removeAll = (arr, ele) => {
    let newArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        let a = arr[i];
        a != ele && newArr.push(a);
    }
    return newArr;
}