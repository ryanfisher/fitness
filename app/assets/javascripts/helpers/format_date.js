Ember.Handlebars.registerBoundHelper('format-date', function(date) {
  return moment(date).format("MMMM D, YYYY");
});
