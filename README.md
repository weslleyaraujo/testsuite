# Testsuite

Testsuite is a small framework to write unit tests based on javascript.
It has a quite simple features and its not made to compete with any other similar frameworks such as [Jasmine], [Mocha], etc.
I started this project based on a study case.
(Have you imagine how do they test a test framework? :open_mouth:)

Quick Example
--------------
Example and available features:

```
TestSuite.module("Module A", function (module) {

    module.test("working assertions", function(assert) {
      assert.equals(1, 1);
      assert.equals('1', '1');
    });
    
    module.test("not equal assertions", function(assert) {
      assert.notEquals(2, 1);
    });
    
    module.test("failing assertion", function(assert) {
      assert.equals(2, 1);
      assert.equals(1, 2, "Expected this to break.");
      assert.equals(10, '1');
    });
});

TestSuite.module("Module B", function (module) {
    var b = 'yes';
    module.beforeEach(function () {
      b = 'no';
    });
    
    module.test('b equals "no"', function (assert) {
      assert.equals(b, 'no');
    });
});
```

The results will come into your console :smiley:

(Better displayed on Google Chrome)

License
----

MIT

Installation
--------------

```sh
git clone https://github.com/weslleyaraujo/testesuite.git your_project
cd your_project
npm install
```

**Who let the dogs out? (who, who, who who who)**

[Jasmine]:https://github.com/pivotal/jasmine
[Mocha]:https://github.com/visionmedia/mocha

