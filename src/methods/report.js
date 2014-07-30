!function(root, Test) {
  'use strict';
  Test.methods = Test.methods || {};

  Test.methods.ErrorLog = function (error) {
    Test.methods.Logger('message', '----> ' + error + '\n');
  };

  Test.methods.Report = function (report, description) {

    if (report.failures === 0) {
      Test.methods.Logger('success', description);
      return;
    }

    // test are not okay
    Test.methods.Logger('failure', description);
    report.errorMessages.forEach(Test.methods.ErrorLog);
  };

}(this, this.Test);
