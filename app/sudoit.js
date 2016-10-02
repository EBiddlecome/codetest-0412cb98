

//Add func accomplishes the requirements for User Stories 1 & 2
//add a task item & display task list:
var close = document.getElementsByClassName('close');
var nodeList = document.getElementsByTagName('LI');

var list = document.querySelector('ol');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

var deleteTask = function() {

  for (var i = 0; i < close.length; i++) {

    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }

  for (var i = 0; i < nodeList.length; i++) {
    var span = document.createElement('SPAN');
    var txt = document.createTextNode('\u00D7');
    
    span.className = 'close';
    span.appendChild(txt);
    nodeList[i].appendChild(span);
  }
};


var newTask = function () {

  var li = document.createElement('li');
  var inputValue = document.getElementById('taskInput').value;
  var t = document.createTextNode(inputValue);

  li.appendChild(t);

  //in case user leaves input blank, show alert
  if (inputValue === '') {
    alert('Please enter a task in need of completion!');
  } else {
    document.getElementById('taskList').appendChild(li);
  }

  document.getElementById('taskInput').value = '';

  //User Story 3 asks that a user be able remove a task
  //add a "close" button (x) to each task to facilitate

  var span = document.createElement('SPAN');
  var txt = document.createTextNode('\u00D7');
  span.className = 'close';
  span.appendChild(txt);
  li.appendChild(span);
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = 'none';
    };
  }

};


