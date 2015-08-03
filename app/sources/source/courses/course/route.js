import Ember from 'ember';

export default Ember.Route.extend({
  model: function (params) {
    var store = this.store;

    if ( store.peekAll('category').get('length') > 0 ) {
      return store.findRecord('course', params.course_id);
    } else {
      return store.findAll('category').then(function(){
        return store.findRecord('course', params.course_id);
      });
    }
  }
});
