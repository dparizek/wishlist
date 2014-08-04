$(function() {
  var items = new ItemCollection();
  var listView = new ListView({collection: items});
  var formView = new FormView({collection: items});
  items.fetch();
})
