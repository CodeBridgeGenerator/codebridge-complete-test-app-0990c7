const assert = require('assert');
const app = require('../../src/app');

describe('\'objext12m\' service', () => {
  it('registered the service', () => {
    const service = app.service('objext12m');

    assert.ok(service, 'Registered the service (objext12m)');
  });
});
