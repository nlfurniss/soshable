Soshable.Views.CategoryList = Backbone.View.extend({

    el: '#categories',
    template: 'categories',

    events: {
        'click a' : 'toggleActive'
    },

    render: function() {
        jade.render(this.el, this.template, {categories: this.collection.toJSON()});
        return this;
    },

    toggleActive: function(event) {
        console.log('click');
        event.preventDefault();
        this.$('li a').removeClass('active');
        $(event.target).addClass('active');
    }

});