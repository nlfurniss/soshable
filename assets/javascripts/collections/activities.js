Soshable.Collections.Activities = Backbone.Collection.extend({

	initialize: function() {
		this.catId = 'all';
		this.setCatName();
		Soshable.dispatcher.on('fetchActivities', this.retrieve, this);
	},

	url: function() {
		return '/sosh/activities/' + this.catId;
	},

	retrieve: function(catId) {
		this.catId = catId;
		this.setCatName();
		this.fetch();
	},

	parse: function(response) {
		return response.activities;
	},

	setCatName: function() {
		this.catName = Soshable.categories.where({id: this.catId})[0].get('name') || '';
	}

});