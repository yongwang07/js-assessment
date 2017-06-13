exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    const files = [];
    if (data.files && data.files.length > 0) {
      data.files.forEach(function(file) {
        if (file.dir) {
          let sub = dirName && data.dir === dirName ? file.dir : dirName;
          files.push(...recursionAnswers.listFiles(file, sub));
        } else {
          if (dirName === undefined || (dirName && data.dir === dirName)) {
            files.push(file);
          }
        }
      });
      return files;
    }
  },

  permute: function(arr) {
    if (arr.length <= 1) return [arr];
    const ans = [];
    for (let i = 0; i < arr.length; i++) {
      let remain = [...arr.slice(0, i), ...arr.slice(i + 1)];
      recursionAnswers.permute(remain).forEach(p => ans.push([arr[i], ...p]));
    }
    return ans;
  },

  fibonacci: function(n) {
    return n < 2 ? n : recursionAnswers.fibonacci(n - 2) + recursionAnswers.fibonacci(n - 1);
  },

  validParentheses: function(n) {
    function generateParenthesis(res, mstr, r, l) {
      if (r === 0 && l === 0) {
        res.push(mstr);
      }
      if (l > 0) {
        generateParenthesis(res, mstr + '(', r, l - 1);
      }
      if (r > 0 && r > l) {
        generateParenthesis(res, mstr + ')', r - 1, l);        
      }
    }
    const res = [];
    generateParenthesis(res, '', n, n);
    return res
  }
};