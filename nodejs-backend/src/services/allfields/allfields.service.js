const { Allfields } = require('./allfields.class');
const createModel = require('../../models/allfields.model');
const hooks = require('./allfields.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/allfields', new Allfields(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('allfields');

  service.hooks(hooks);
};