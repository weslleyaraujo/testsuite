/*
 * @method equals
 *
 * Assert values to equals
 * @return {Boolean} true if the values are equal
 * */
;(function(Test, Methods) {
  'use strict';

  Test.prototype.equals = function () {
    var _args = Methods.toArray.apply(null, arguments);

    if (_args.length !== 2) {
      this.report.failures++;
      this.report.errorMessages.push('Assert "equals" must have two arguments.');
      return false;
    }

    // does it equals?
    if (Methods.eql.apply(null, _args)) {
      this.report.success++;
      return true;
    }

    this.report.failures++;
    this.report.errorMessages.push('Expected ' + _args[0] + '(' + typeof (_args[0]) + ')'
          + ' to be ' + _args[1] + '('+ typeof (_args[1]) +')');

    return false;
  };

} (this.Test, this.Test.methods));
