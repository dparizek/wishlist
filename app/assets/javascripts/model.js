var Item = Backbone.Model.extend({
  defaults: {
    title: '',
    img_url: '',
    url: ''
  }
});

var ItemCollection = Backbone.Collection.extend({
  model: Item,

  url: '/items'

});
