Soshable.Views.CategoryList = Backbone.View.extend({

    el: '#categories',
    template: 'categories',

    events: {
        'click a' : 'fetchActivities'
    },

    render: function() {
        jade.render(this.el, this.template, {categories: this.collection.toJSON()});
        this.$('li a').first().addClass('active');
        return this;
    },

    fetchActivities: function(event) {
        event.preventDefault();
        var $target = $(event.target);
        this.$('li a').removeClass('active');
        $target.addClass('active');
        Soshable.dispatcher.trigger('fetchActivities', $target.attr('data-id'));
    }

});