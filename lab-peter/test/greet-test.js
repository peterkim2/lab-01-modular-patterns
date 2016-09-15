'use strict';

const greet = require('../lib/greet');
const assert = require('assert');

describe('testing module greet', function(){
  it('should return hello peter', function(){
    assert.equal(greet('peter'), 'hello peter', 'did not display greet peter');
  });
  it('should throw a missing name error', function(){
    assert.throws(function(){
      greet();
    }, 'shoulda thrown dat err');
  });
});
