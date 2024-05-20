const assert = require('assert');
const app = require('../../src/app');

describe('\'arrayfields\' service', () => {
  it('registered the service', () => {
    const service = app.service('arrayfields');

    assert.ok(service, 'Registered the service (arrayfields)');
  });
});
