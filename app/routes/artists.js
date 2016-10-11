import Ember from 'ember';

export default Ember.Route.extend({

  model: function(){
    var url = "http://itp-api.herokuapp.com/api/artists";
    return $.getJSON(url);
  }
});
