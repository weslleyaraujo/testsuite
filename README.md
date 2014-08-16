# Testsuite

Testsuite is a small framework to write unit tests based on javascript.
It has a quite simple features and its not made to compete with any other similar frameworks such as [Jasmine], [Mocha], etc.
I started this project based on a study case.
(Have you imagine how do they test a test framework? :open_mouth:)

[Full docs here]

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

TestSuite.module("Module C", function (module) {
    var b = [1, 2, 3]
    
  module.test('has value in array', function (assert) {
    assert.toContain(b, 2);
  });

  module.test('does not has value in array', function (assert) {
    assert.notToContain(b, 4);
  });
});
```

The results will come into your console :smiley:

(Better displayed on Google Chrome)

License
----

Beerware

Installation
--------------

```sh
git clone https://github.com/weslleyaraujo/testsuite.git testsuite
cd testsuite
npm install
```

**Who let the dogs out? (who, who, who who who)**

[Jasmine]:https://github.com/pivotal/jasmine
[Mocha]:https://github.com/visionmedia/mocha
[Full docs here]:http://weslleyaraujo.github.io/testsuite/

