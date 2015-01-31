Fitness.WeighingRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('weighing');
  },
  afterModel: function(weighing, transition) {
    this.transitionTo('weighings');
  }
});
