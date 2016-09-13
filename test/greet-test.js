'use strict';

//import the code you want to test
const greet = require('../lib/greet');
const assert = require('assert');

describe('testing module greet', function(){
  it('should return hello peter', function(){
    assert.equal(greet('peter'), 'hello peter'); //if true do nothing, if false 
    });
  it('should throw a missing name error', function(){
    assert.throws(function(){
      greet();
    }, 'shoulda thrown dat err');
  });
});