// Generated by CoffeeScript 1.8.0
define(function() {
  var isArray, isDate, isFunction, isNumber, isObject, isString, keyPath, replace;
  isNumber = function(maybeNum) {
    return Object.prototype.toString.call(maybeNum) === '[object Number]';
  };
  isObject = function(maybeObj) {
    return Object.prototype.toString.call(maybeObj) === '[object Object]';
  };
  isArray = function(maybeArr) {
    return Object.prototype.toString.call(maybeArr) === '[object Array]';
  };
  isString = function(maybeStr) {
    return Object.prototype.toString.call(maybeStr) === '[object String]';
  };
  isDate = function(maybeDate) {
    return Object.prototype.toString.call(maybeDate) === '[object Date]';
  };
  isFunction = function(maybeFunction) {
    return Object.prototype.toString.call(maybeDate) === '[object Function]';
  };
  replace = function(template, replacement) {
    var key, reg, replaceKeyArray, value, _i, _len;
    replaceKeyArray = template.match(/{.*?}/g);
    if (!replaceKeyArray) {
      return template;
    }
    for (_i = 0, _len = replaceKeyArray.length; _i < _len; _i++) {
      key = replaceKeyArray[_i];
      reg = new RegExp(key, 'g');
      value = keyPath(replacement, key.slice(1, -1));
      if (value === void 0 || value === null) {
        value = '';
      }
      template = template.replace(reg, value);
    }
    return templete;
  };
  keyPath = function(dictionary, keyPath) {
    var key, keyPathArray, returnValue, _i, _len;
    returnValue = dictionary[keyPath];
    if (keyPath.indexOf('.' > -1)) {
      keyPathArray = keyPath.split('.');
      returnValue = dictionary;
      for (_i = 0, _len = keyPathArray.length; _i < _len; _i++) {
        key = keyPathArray[_i];
        if (isObject(returnValue) && (key in returnValue)) {
          returnValue = returnValue[key];
        } else {
          return null;
        }
      }
    }
    return returnValue;
  };
  return {
    'isNumber': isNumber,
    'isObject': isObject,
    'isArray': isArray,
    'isString': isString,
    'isDate': isDate,
    'isFunction': isFunction,
    'replace': replace,
    'keyPath': keyPath
  };
});