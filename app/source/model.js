import DS from 'ember-data';

export default DS.Model.extend({
  courses: DS.hasMany('course', {async: true}),
  name: DS.attr('string'),
  kind: DS.attr('string'),
  merlot_missing: DS.attr('string'),
  course_count: DS.attr('string')
});
