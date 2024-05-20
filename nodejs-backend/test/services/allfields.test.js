const assert = require('assert');
const app = require('../../src/app');

describe('\'allfields\' service', () => {
  it('registered the service', () => {
    const service = app.service('allfields');

    assert.ok(service, 'Registered the service (allfields)');
  });
});
