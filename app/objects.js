exports = typeof window === 'undefined' ? global : window;

exports.objectsAnswers = {
  alterContext: function(fn, obj) {
    return fn.apply(obj);
  },

  alterObjects: function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate: function(obj) {
    return Object.keys(obj).reduce((acc, property) => {
      if (obj.hasOwnProperty(property)) {
        acc.push(property + ': ' + obj[property]);
      }
      return acc;
    }, []);
  }
};
