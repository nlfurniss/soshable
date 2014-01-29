window.Soshable = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    Data: window.soshableData,

    initialize: function() {

        this.categories = new Soshable.Collections.Categories(Soshable.Data.categories);
        this.neighborhoods = new Soshable.Collections.Neighborhoods(Soshable.Data.neighborhoods);

        
    }
}

$(function(){window.Soshable.initialize()});