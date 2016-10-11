import QUnit from 'steal-qunit';
import myLib from '../demo/my-lib';
import fixture from '../fixture-socket-io';

QUnit.module('Socket io lib', {
  beforeEach: function(){
    fixture.mock();
  },
  afterEach: function(){
    fixture.restore();
  }
});

QUnit.test('Init', function(assert){
  myLib.init();
  assert.ok(false);
});