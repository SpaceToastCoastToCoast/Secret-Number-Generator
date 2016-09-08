'use strict';
module.exports = function() {

  const secretNumber = (function(){
    let rand = Math.random();
    return function(){
      return rand;
    };
  })();

  return secretNumber;
};