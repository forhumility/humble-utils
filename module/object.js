/*
 * @Author       : Humility
 * @Date         : 2021-10-23 23:36:50
 * @LastEditTime : 2021-10-26 20:12:01
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\object.js
 * @Description  : 对象工具
 */

/**
 * 判断两个对象是否键值相同
 * @description: 判断两个对象是否键值相同
 * @param {Object} obj1 第一个对象
 * @param {Object} obj2 第二个对象
 * @return {Boolean} 是否相同
 */
export const isObjectEqual = (obj1, obj2) => {
    let aProps = Object.getOwnPropertyNames(obj1);
    let bProps = Object.getOwnPropertyNames(obj2);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        if (obj1[propName] !== obj2[propName]) {
            return false;
        }
    }
    return true;
}