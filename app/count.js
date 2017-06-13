exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    console.log(start++);
    const timer = setInterval(() => {
      if (start === end + 1) {
        clearInterval(timer);
      }
      else {
        console.log(start++);
      }
    }, 100);
    return {
      cancel: () => clearInterval.call(this, timer)
    }
  }
};