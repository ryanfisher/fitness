Fitness.WeighingRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('weighing');
  },
  // @todo figure this stuff out
  // afterModel: function(weighing, transition) {
  //   this.transitionTo('weighings');
  // }
});
