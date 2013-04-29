'use strict';

var generator = require('yeoman-generator');
var util = require('util');

var Generator = module.exports = function Generator(args, options, config) {
  generator.Base.apply(this, arguments);
};

util.inherits(Generator, generator.Base);

Generator.prototype.askForDir = function askForDir() {
  var done = this.async();
  var self = this;

  this.prompt([{
    name: 'aDir',
    message: 'Name your directory A',
    'default': 'a'
  }, {
    name: 'bDir',
    message: 'Name your directory B',
    'default': 'b'
  }], function(err, props) {
    if (err) {
      return self.emit('error', err);
    }

    self.aDir = props.aDir || 'a';
    self.bDir = props.bDir || 'b';
    done();
  });
};

Generator.prototype.asyncProcessA = function doAsyncA() {
  var done = this.async();
  var self = this;
  setTimeout(function () {
    self.dirs = [self.aDir, self.bDir];
    done();
  }, 1000);
};

Generator.prototype.processB = function doAsyncB() {
  this.dirs.join(', ');
};
