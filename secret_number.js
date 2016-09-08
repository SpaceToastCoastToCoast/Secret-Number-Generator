'use strict';
module.exports = function() {

  var secretNumber = function(){
    let rand = Math.random();
    return rand;
  };

  return secretNumber;
};