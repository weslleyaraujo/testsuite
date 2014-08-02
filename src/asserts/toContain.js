/*
 * @method toContain
 *
 * Assert values contains in array
 * @return {Boolean} true if the values exists in array
 * */
;(function(Test, Methods) {
  'use strict';

  Test.prototype.toContain = function (a, b) {
    // is the first parameter an array?
    if (!Array.isArray(a)) {
      this.report.failures++;
      this.report.errorMessages.push('Expected ' + a + ' to be an array.');
      return false;
    }

    // is in?
    if (a.indexOf(b) <= 1) {
      this.report.success++;
      return true;
    }


    this.report.failures++;
    this.report.errorMessages.push('Expected ' + a + '(' + typeof (a) + ')'
          + ' to cointain ' + b + '('+ typeof (b) +')');
    return false;
  };

} (this.Test, this.Test.methods));
