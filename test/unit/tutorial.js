define([
  'intern!object',
  'intern/chai!expect',
  'ally/util/node-array',
], function(registerSuite, expect, nodeArray) {
  registerSuite({
    name: 'unit-tutorial',

    firstTest: function() {
      expect(nodeArray).to.be.a('function');
    },
  });
});
