/*
 * @method equals
 *
 * Assert values to equals
 * @return {Boolean} true if the values are equal
 * */
;(function(Test, Methods) {
  'use strict';

  Test.prototype.equals = function (a, b) {

    // does it equals?
    if (Methods.eql(a, b)) {
      this.report.success++;
      return true;
    }

    this.report.failures++;
    this.report.errorMessages.push('Expected ' + a + '(' + typeof (a) + ')'
          + ' to equal ' + b + '('+ typeof (b) +')');

    return false;
  };

} (this.Test, this.Test.methods));
