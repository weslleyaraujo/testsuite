/*
 * @method Logger
 *
 * Logs a message referring to a type
 * @param {String} type
 * Accept values:
 *      - message
 *      - failure
 *      - success
 * @param {String} message The message to display on log
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
    try {
      console.log('%c '+ message + ' ',
          'width: 100%; background-color: '+ defaults.types[type].bgColor +'; color:' + defaults.types[type].color);
    } catch (e) {
      throw new Error('Type message named "' + type + '" does not exist.');
    }
  };

} (this, this.Test));
