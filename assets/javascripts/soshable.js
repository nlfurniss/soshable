window.Soshable = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Data: window.soshableData,

    initialize: function() {
        this.dispatcher = new Soshable.Models.Dispatcher();

        this.categories = new Soshable.Collections.Categories(Soshable.Data.categories);
        this.neighborhoods = new Soshable.Collections.Neighborhoods(Soshable.Data.neighborhoods);
        this.activities = new Soshable.Collections.Activities();

        this.categoryList = new Soshable.Views.CategoryList({collection: this.categories}).render();
        this.activityGrid = new Soshable.Views.ActivityGrid({collection: this.activities});
    }
}

$(function(){window.Soshable.initialize()});