import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('source', { path: '/sources' }, function() {
    this.route('show', { path: ':source_id' }, function () {
      this.route('course', { path: '/courses' }, function () {
        this.route('show', { path: ':course_id' }, function () {

        });
      });
    });
  });
});

export default Router;
