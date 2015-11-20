//dropdown

'use strict';

var tpl = require('./template.html');
var check = require('check-types');
require('./styles.styl');


module.exports = function() {
  return Ractive.extend({
    template: tpl,
    data: {
      open: false,  // whether the dropdown is open or not
      list: {},     // the list of options
      value: ''     // the selected value of the list
    },
    computed: {
      displayVal: function() {
        var self = this;
        var list = self.get('list');
        var index = self.get('value');
        if (list.hasOwnProperty(index)) {
          return list[index];
        } else {
          return null;
        }
      }
    },
    onconstruct: function(options) {
      if (check.unemptyString(options.data.width)) {
        options.data.width = options.data.width.replace(/[^0-9]/ig, '');
      }
    },
    onconfig: function() {
    },
    oninit: function() {
      var self = this;
      var listener = function() {
        document.removeEventListener('click', listener);
        self.set('open', false);
      };
      self.on('toggleList', function() {
        self.toggle('open');
        if (self.get('open')) {
          document.addEventListener('click', listener);
        } else {
          document.removeEventListener('click', listener);
        }
        return false;
      });
      self.on('selectItem', function(event, index) {
        var name = self.get('name') || '';
        event.original.stopPropagation();
        self.set('value', index);
        self.set('open', false);
        document.removeEventListener('click', listener);
        self.fire('changeVal', index, name);
      });
    }
  });
};