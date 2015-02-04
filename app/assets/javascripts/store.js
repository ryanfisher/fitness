Fitness.ApplicationStore = DS.Store.extend({
  revision: 11,
  adapter: DS.RESTAdapter.reopen({
    namespace: 'api/v1'
  })
});
