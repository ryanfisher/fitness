Ember.Handlebars.registerBoundHelper('format-date', function(date) {
  return moment(date).fromNow();
});
