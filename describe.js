var describe = function(message, callback) {
      document.getElementById('test').innerHTML += (message +"</span></br>" );
      callback();
}
