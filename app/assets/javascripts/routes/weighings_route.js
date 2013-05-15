Fitness.WeighingsRoute = Ember.Route.extend({
  model: function() {
    return Fitness.Weighing.find();
  },
  setupController: function(controller) {
    controller.set('content', []);
  }
});
