Soshable.Routers.SoshableRouter = Backbone.Router.extend({

	routes: {
		'': 'home'
	},

	home: function() {
		var activities = new Soshable.Views.ActivityGrid();
	}

});