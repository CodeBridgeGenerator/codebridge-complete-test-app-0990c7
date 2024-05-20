const users = require("./users/users.service.js");
const allfields = require("./allfields/allfields.service.js");
const arrayfields = require("./arrayfields/arrayfields.service.js");
const objext121 = require("./objext121/objext121.service.js");
// ~cb-add-require-service-name~

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
    app.configure(users);
  app.configure(allfields);
  app.configure(arrayfields);
  app.configure(objext121);
    // ~cb-add-configure-service-name~
};
