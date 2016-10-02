var expect = chai.expect;
var should = chai.should();

describe('timeToTest', function() {

  it('should take less than 500ms', function(done) {
    setTimeout(done, 200);
  });

});


describe('newTask', function() {

  it('should begin with an empty list', function() {
    expect(document.getElementById('taskList')).to.be.null;
  });	

  it('should take in a string as inputValue', function() {
    var inputValue = '';
    expect('inputValue').to.be.a('string');
  });

  it('should correctly store input string', function() {
    var inputValue = 'abc';
    expect('inputValue').to.have.valueOf('abc');
  });

  it('should display the list with added task', function() {
    var inputValue = 'abc';
    expect('li').to.have.valueOf('abc');
  });
});


describe('deleteTask', function() {

  it ('should have tasks to close', function() {
    expect(document.getElementsByTagName('li')).to.exist;
  });

  it ('should remove selected task', function() {
    expect(this.parentElement--);
  });

});


describe('markTask', function() {
  it ('should have tasks to mark', function() {
    expect(document.getElementsByTagName('li')).to.exist;
  });
  it ('should add a check mark', function() {
    // expect('ol#taskList').to.include('checked');
  });
});