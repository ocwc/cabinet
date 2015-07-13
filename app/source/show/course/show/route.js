import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    // console.log(this.paramsFor('source.show.course.show'));
    return this.store.findById('course', this.paramsFor('source.show.course.show').course_id);
  }
});
