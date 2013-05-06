Fitness.Router.map(function() {
  this.resource('weighings', function() {
    this.resource('weighing', { path: ':weighing_id' });
  });
  this.route('chart');
});
