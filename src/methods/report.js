/*
 * @method Report
 *
 *
 * @param {Object} report All information about the test
 * @param {String} description The description of the test
 * */
;(function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  /*
   * @method ErrorLog
   *
   * Logs descritive error
   * @param {String} error Description of error
   * */
  Test.methods.ErrorLog = function (error) {
    Test.methods.Logger('message', '----> ' + error + '\n');
  };

  Test.methods.Report = function (report, description) {

    if (report.failures === 0) {
      Test.methods.Logger('success', description + ': ' + report.success + ' success(s)');
      return;
    }

    // test are not okay
    Test.methods.Logger('failure', description +  ': ' + report.failures + ' failure(s)');
    report.errorMessages.forEach(Test.methods.ErrorLog);
  };

} (this, this.Test));
