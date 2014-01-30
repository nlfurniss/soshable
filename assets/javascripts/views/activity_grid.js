Soshable.Views.ActivityGrid = Backbone.View.extend({
	
    el: '#activities',
    template: 'activities',

    events: {
        '' : ''
    },

    initialize: function() {
    	//Soshable.dispatcher.on('', ,);
    	this.collection.on('sync', this.render, this);
    	Soshable.dispatcher.trigger('fetchActivities', 'all');
    },

    render: function() {
        jade.render(this.el, this.template, {activities: this.collection.toJSON(), catName: this.collection.catName});
        return this;
    }

});