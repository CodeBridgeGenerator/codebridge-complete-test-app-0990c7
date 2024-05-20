const { Objext12m } = require('./objext12m.class');
const createModel = require('../../models/objext12m.model');
const hooks = require('./objext12m.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ['$populate']
  };

  // Initialize our service with any options it requires
  app.use('/objext12m', new Objext12m(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('objext12m');

  service.hooks(hooks);
};