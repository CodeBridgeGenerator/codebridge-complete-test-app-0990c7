const { Arrayfields } = require('./arrayfields.class');
const createModel = require('../../models/arrayfields.model');
const hooks = require('./arrayfields.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/arrayfields', new Arrayfields(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('arrayfields');

  service.hooks(hooks);
};