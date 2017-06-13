exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise((resolve, reject) => resolve(value));
  },

  manipulateRemoteData: function(url) {
    return new Promise((resolve, reject) => {
      $.ajax({
        url: url,
        dataType: 'json',
        success: data => resolve(data.people.map(people => people.name).sort())
      });
    })
  }
};