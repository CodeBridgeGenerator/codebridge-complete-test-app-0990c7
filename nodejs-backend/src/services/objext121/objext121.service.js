const { Objext121 } = require('./objext121.class');
const createModel = require('../../models/objext121.model');
const hooks = require('./objext121.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"]
  };

  // Initialize our service with any options it requires
  app.use('/objext121', new Objext121(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('objext121');

  service.hooks(hooks);
};