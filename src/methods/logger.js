/*
 * @method Logger
 *
 * Logs a message 
 * @return {Boolean} true if the values are equal
 * */
;(function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};
  var defaults = {
    types: {
      message: {
        bgColor: '#EEE',
        color: '#333'
      },

      failure: {
        bgColor: '#B03911',
        color: '#EEE'
      },

      success: {
        bgColor: '#5E7D00',
        color: '#EEE'
      }
    }
  };

  Test.methods.Logger = function (type, message) {
    console.log('%c '+ message + ' ',
        'width: 100%; background-color: '+ defaults.types[type].bgColor +'; color:' + defaults.types[type].color);
  };

}(this, this.Test));
