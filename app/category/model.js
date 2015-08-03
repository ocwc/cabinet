import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    merlot_id: DS.attr('number'),
    children: DS.hasMany('category', { inverse: 'parent'}),
    parent: DS.belongsTo('category', { inverse: 'children'}),
});
