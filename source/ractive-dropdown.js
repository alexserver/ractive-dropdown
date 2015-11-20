
require('./styles.styl');

module.exports = Ractive.extend({
  template: require('./template.html'),
  oninit: function() {
    console.log('hello world');
  }
});