/*eslint-disable*/
(function() {
  var ractive = new Ractive({
    template: document.querySelector("#main_template").innerHTML,
    el: "#ractive_container",
    components: {
      dropdown: RactiveDropdown
    },
    data: {
      collection: {
        '001': 'David Gilmour',
        '002': 'Roger Waters',
        '003': 'Richard Wright',
        '004': 'Nick Mason',
        '005': 'Syd Barrett'
      },
      selected: '005'
    }
  });
  ractive.on('add_to', function(){
    var col = this.get('collection');
    var key = this.get('key');
    var val = this.get('val');
    if (!col.hasOwnProperty(key)) {
      col[key] = val;
      //updating the collection, and cleaning fields.
      this.update('collection', col);
      this.set('key', '');
      this.set('val', '');
    }
  });
  ractive.on('remove', function(event, index) {
    var col = this.get('collection');
    if (col.hasOwnProperty(index)) {
      delete col[index];
      this.update('collection', col);
    }
  });
})();