import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  author: DS.belongsTo('author'),
  body: DS.attr()
});
