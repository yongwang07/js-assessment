exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return (num >>> (bit - 1)) & 1;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    let n = num.toString(2);
    return '00000000'.substr(n.length) + n;
  },

  multiply: function(a, b) {
    let p = b.toString();
    return Number((a * b).toPrecision(p.length - p.indexOf('.') - 1));
  }
};
