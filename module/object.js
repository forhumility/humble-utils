/*
 * @Author       : Humility
 * @Date         : 2021-10-23 23:36:50
 * @LastEditTime : 2021-10-24 21:52:43
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\module\object.js
 * @Description  : 对象工具
 */

// 判断两个对象是否键值相同
export const isObjectEqual = (a, b) => {
    let aProps = Object.getOwnPropertyNames(a);
    let bProps = Object.getOwnPropertyNames(b);

    if (aProps.length !== bProps.length) {
        return false;
    }

    for (let i = 0; i < aProps.length; i++) {
        let propName = aProps[i];

        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}