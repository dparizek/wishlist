var ItemView = Backbone.View.extend({
  tagName: 'div',

  className: 'item',

  initialize: function() {
    // listens to model AND DOM
    // this.listenTo(this.model, 'change', this.render);
    this.listenTo(this.model, 'destroy', this.remove);
    this.render();
  },

  // only listens to DOM
  events: {
    'click .remove' : 'onRemove'
  },

  onRemove: function() {
    this.model.destroy();
  },

  template: _.template($('#item-html').html()),

  render: function() {
     var rendered = this.template({item: this.model});
     this.$el.html(rendered);
  }
});

// container for lots of smaller views
var ListView = Backbone.View.extend({
  el: '#container',

  initialize: function() {
    this.listenTo(this.collection, 'add', this.addOne);
    this.render();
  },

  addOne: function(item) {
    var view = new ItemView({model: item});
    this.$el.append(view.el);
  }
});

var FormView = Backbone.View.extend({
  el: 'form',

  events: {
    'submit' : 'createItem'
  },

  createItem: function(evt) {
    evt.preventDefault();
    var image_url = this.$('[name ="image_url"]').val();
    var url = this.$('[name ="url"]').val();
    var title = this.$('[name = "title"]').val();
    this.el.reset();
    this.collection.create({
      image_url: image_url,
      url: url,
      title: title
    });

  }
});
