export default Ember.Route.extend({
  model() {
    return this.store.query('player', {name: "tom brady"});
  }
});
