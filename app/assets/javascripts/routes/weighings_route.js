Fitness.WeighingsRoute = Ember.Route.extend({
  model: function() {
    return Fitness.Weighing.find();
  }
});
