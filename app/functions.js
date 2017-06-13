exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return function(str2) {
      return str + ', ' + str2;
    }
  },

  makeClosures: function(arr, fn) {
    return arr.reduce((acc, i) => {
      acc.push(function() {
        return fn(i);
      });
      return acc;
    }, []);
  },

  partial: function(fn, str1, str2) {
    return function(str3) {
      return fn.call(this, str1, str2, str3);
    }
  },

  useArguments: function() {
    return [].slice.call(arguments).reduce((acc, item) => acc + item, 0);
  },

  callIt: function(fn) {
    const [_, ...args] = arguments;
    return fn.apply(this, args);
  },

  partialUsingArguments: function(fn) {
    const [_, ...args] = arguments;
    return function(...arg2) {
      return fn(...args, ...arg2);
    }
  },

  curryIt: function(fn) {
    const cacheArgs = [];
    return function proxy(arg) {
      cacheArgs.push(arg);
      return cacheArgs.length < 3 ? proxy : fn.apply(null, cacheArgs)  
    }
  }
};