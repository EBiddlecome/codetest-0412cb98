process.env.NODE_ENV = 'test';

var should = require('chai').should; 
var expect = require('chai').expect;
var task = require('../app/task.js');

describe('List', function() {
  it('should begin with an empty list', function() {
    //start with an empty array
    expect('list').to.exist;
    expect('list').to.have.lengthOf(0 || list.length - 1);
  });
});

describe('Add', function() {
  it('should add a task to the list', function() {
    //allow user to create a task 
    expect('task').to.be.a('string');
    expect('list').to.contain('task');
  });
});

describe('View', function() {
  it('should display all tasks on the list', function() {
    //return all tasks to user 

  });
});

describe('Edit', function() {
  it('should edit a task in the list', function() {
    //allow user to edit a task in the task list

  });
});

describe('Remove', function() {
  it('should allow a user to remove a task from the list', function() {
    //delete user specified task

  });
});

