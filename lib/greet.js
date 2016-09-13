'use strict';

module.exports = function(name){
  if(!name) throw new Error('should be name')
 return `hello ${name}`;
};