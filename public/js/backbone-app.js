var MyController = Backbone.Controller.extend({
  routes : {
    "say/ :something" : "say"        
  },

  say : function(something) {
        alert(something);
  }
});
var yC = new MyController;

Backbone.history.start();

console.log("loaded");

var MyModel = Backbone.Model.extend({});

var starwars = new MyModel();
starwars.set({title: "StarWars"});
console.log(starwars.get('title'));
