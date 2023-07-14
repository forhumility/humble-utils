/**
 * @Author       : Humility
 * @Date         : 2023-07-14 14:21:42
 * @LastEditTime : 2023-07-14 14:33:09
 * @LastEditors  : Humility
 * @FilePath     : \humble-utils\src\other.ts
 * @Description  : 其他
 */

/**
 * 线程休眠
 * @description: 线程休眠
 * @param {number} mills 休眠时间(毫秒)
 * @return {Promise}
 */
export function sleep(mills: number) {
  return new Promise((resolve) => setTimeout(resolve, mills));
}
