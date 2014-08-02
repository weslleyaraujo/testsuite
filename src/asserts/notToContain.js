/*
 * @method notToContain
 *
 * Assert values not contains in array
 * @return {Boolean} true if the values does not exists in array
 * */
;(function(Test, Methods) {
  'use strict';

  Test.prototype.notToContain = function (a, b) {
    // is the first parameter an array?
    if (!Array.isArray(a)) {
      this.report.failures++;
      this.report.errorMessages.push('Expected ' + a + ' to be an array.');
      return false;
    }

    // is in?
    if (a.indexOf(b) <= 0) {
      this.report.success++;
      return true;
    }


    this.report.failures++;
    this.report.errorMessages.push('Expected ' + a + '(' + typeof (a) + ')'
          + ' not to cointain ' + b + '('+ typeof (b) +')');
    return false;
  };

} (this.Test, this.Test.methods));
