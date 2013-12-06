Fitness.WeighingRoute = Ember.Route.extend({
  model: function() {
    return Fitness.Weighing.find();
  },
  afterModel: function(weighing, transition) {
    this.transitionTo('weighings');
  }
});
