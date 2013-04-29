'use strict';

var assert = require('assert');
var path = require('path');
var util = require('util');
var generators = require('yeoman-generator');
var helpers = require('yeoman-generator').test;

describe('test generator race condition', function () {
  var foundation;

  beforeEach(function(done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function(err) {
      if (err) {
        done(err);
      }
      foundation = helpers.createGenerator('test:app', ['../../app']);
      done();
    });
  });

  it('should output "aaa, bbb"', function (done) {
    helpers.mockPrompt(foundation, {'aDir': 'aaa', 'bDir': 'bbb'});

    foundation.run({}, function() {
      done();
    });
  });
});
