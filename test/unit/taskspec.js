var expect = require('chai').expect;
var mongoose = require('mongoose');
var Task = require('./Task.js');

describe('Task', function () {

  it('should be a Mongoose model', function () {
    expect(new Task()).to.be.instanceOf(mongoose.Model);
  });

  it('should have a schema', function () {
    expect(Task.schema).to.exist;
  });


});
