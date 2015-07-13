import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return this.modelFor('sources.source').get('courses');
  }
});
