!function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};
  var defaults = {
    types: {
      // message
      // failure
      // success
    }
  };

  Test.methods.logger = function (type, message) {
    console.log('%c Oh my heavens! ', 'background: #222; color: #bada55');
  };

}(this, this.Test);
