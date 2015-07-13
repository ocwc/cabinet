import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('sources', { path: '/sources' }, function() {
    this.route('source', { path: ':source_id' }, function () {
      this.route('courses', { path: '/courses' }, function () {
        this.route('course', { path: ':course_id' }, function () {

        });
      });
    });
  });
});

export default Router;
