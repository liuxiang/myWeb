
import "babel-polyfill";

function addAll() {
  return Array.from(arguments).reduce((a, b) => a + b);
}

// ***********

export function addAll() {
  return Array.from(arguments).reduce((a, b) => a + b);
}

/**
 * nodejs 目前还不能完全支持 ES6 ，只能进一步转换，比如 babel 转换（ babel － node 代替 node 命令）。
 *
 * Babel快速入门 - 推酷
 * www.tuicool.com/articles/uMniArq
 */
