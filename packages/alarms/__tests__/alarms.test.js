'use strict';

const alarms = require('..');
const assert = require('assert').strict;

assert.strictEqual(alarms(), 'Hello from alarms');
console.info("alarms tests passed");
