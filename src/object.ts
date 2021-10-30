/**
 * @Author       : Humility
 * @Date         : 2021-10-23 23:36:50
 * @LastEditTime : 2021-10-30 14:59:16
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\src\object.ts
 * @Description  : 对象
 */


/**
 * 判断两个对象是否键值相同
 * @description: 判断两个对象是否键值相同
 * @param {Object} obj1 第一个对象
 * @param {Object} obj2 第二个对象
 * @return {Boolean} 是否相同
 */
export function isObjectEqual(obj1: object, obj2: object) {
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