const assert = require('assert');
const app = require('../../src/app');

describe('\'objext121\' service', () => {
  it('registered the service', () => {
    const service = app.service('objext121');

    assert.ok(service, 'Registered the service (objext121)');
  });
});
