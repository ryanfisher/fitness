Fitness.WeighingsRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('weighings');
  }
});
