/*
 * @method notEquals
 *
 * Assert values not to equals
 * @return {Boolean} true if the values are not equal
 * */
;(function(Test, Methods) {
  'use strict';

  Test.prototype.notEquals = function () {
    var _args = Methods.toArray.apply(null, arguments);

    // does it equals?
    if (!Methods.eql.apply(null, _args)) {
      this.report.success++;
      return true;
    }

    this.report.failures++;
    this.report.errorMessages.push('Expected ' + _args[0] + '(' + typeof (_args[0]) + ')'
          + ' not to be ' + _args[1] + '('+ typeof (_args[1]) +')');
    return false;
  };

}(this.Test, this.Test.methods));
