
// 绑定事件 兼容处理
export const addEvent =  (nodeId, eventType, callback) => {
  if (nodeId.addEventListener){
    nodeId.addEventListener(eventType, callback, false);
  }else {
    nodeId.attachEvent('on' + eventType, callback);
  }
}

// 移除事件 兼容处理
export const  removeEvent = (nodeId, eventType, callback) => {
  if (nodeId.addEventListener){
    nodeId.removeEventListener(eventType, callback, false);
  }else {
    nodeId.detachEvent('on' + eventType, callback);
  }
}

// 判断 event 事件对象 不存在
export const prevent = (event) => {
  let e = event || window.event;
  if (e.preventDefault) {
		e.preventDefault();
  }
  return e;
}

// 添加滑轮事件 处理火狐浏览器的兼容性
export const addWheelEvent = (nodeId, callback) => {
  if (window.navigator.userAgent.toLowerCase().indexOf('firefox') != -1) {
    addEvent(nodeId, 'DOMMouseScroll', wheel);
  } else {
    addEvent(nodeId, 'mousewheel', wheel);
  }
  function wheel(ev) {
    var oEvent = prevent(ev),
    delta = oEvent.detail ? oEvent.detail > 0 : oEvent.wheelDelta < 0;
    callback && callback.call(oEvent, delta);
    return false;
  }
}

export const appointElement = (appoint, gather) => {
  gather.forEach((value, index) => {
    if (appoint.source === value.source && appoint.target === value.target) {
      gather.splice(index, 1)
    }
  });
}
/**
  * 判断一个值，是否是对象指定属性的值
  * @ value 要对比的值
  * @array 查找的数组对象
  * @attr 要在 object 中和哪个属性的值做比较
 */
export const deleteObject = (value, array, attr) => {
  let key = [];
  let i = 0;
  checkfiled (value, array);
  array.forEach((item, index) => {
    if (item[attr] === value) {
      key.push(index)
    }
  })
  key.forEach((j) => {
    array.splice(j-i, 1);
    i++;
  })

}

/**
  * 判断一个字符串在一个数组对象中是否是某一个对象属性的值
  * @filed 要对比的字段
  * @array 查找的数组对象
  * @attr 要在 object 中和哪个属性的值做比较
 */
export const isExist = (filed, array, attr) => {
  checkfiled (filed, array);
  return array.every((value) => {
    if (value[attr] === filed) {
      return false
    }
    return true
  })
}

/**
 * Example
 * let array =[
 *    { name: 'zhangsan', age: '20'}
 *    { name: 'lisi', age: '23'}
 *  ]
 * 根据 filed = zhangsan， array = array， attr = name , 能把array[0] 的数据返回
 * @param {String} filed
 * @param {Array} array
 * @param {String} attr
 */

export const globalCheckFiledExistInArray = (filed, array, attr) => {
  for (let item of array) {
    if (item[attr] === filed) {
      return item
    }
  }
}


/**
  * 容错处理
  * @value 字符串
  * @array 查找的数组对象
 */
export const checkfiled = (value, array) => {
  if (value === undefined || value.__proto__.constructor !== String) {
    console.error(`参数一 输入的值是${value}， 需要的是字符串`)
  }
  if (array === undefined || array.__proto__.constructor !== Array) {
    console.error(`参数二 输入的值是${array}， 需要的是数组`)
  }
}





