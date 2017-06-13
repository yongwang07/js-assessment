exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    if (!!!str || str.length < 1 || amount < 1) return str;
    let pre = str[0], count = 1, ret = '';
    for (let i = 1; i < str.length; i++) {
      if (str[i] === pre) {
        count++;
      } else {
        ret += pre.repeat(Math.min(count, amount));
        pre = str[i];
        count = 1;
      }
    }
    return ret + pre.repeat(Math.min(count, amount));
  },

  wordWrap: function(str, cols) {
    const words = str.split(' ');
    let length = words[0].length, hold = [words[0]], ret = '';
    for (let i = 1; i < words.length; i++) {
      if (words[i].length + 1 + length > cols) {
        ret += hold.join(' ') + '\n';
        length = words[i].length;
        hold = [words[i]];
      } else {
        hold.push(words[i]);
        length += (1 + words[i].length);
      }
    }
    return ret + hold.join(' ');
  },

  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};