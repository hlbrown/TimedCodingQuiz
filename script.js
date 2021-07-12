var myTimerObj = (function(document){
   
    var myTimer;
 
    function start() {
      myTimer = setInterval(myClock, 1000);
      var counter = 60;
 
      function myClock() {
        document.getElementById("demo").innerHTML = --counter;
        if (counter == 0) {
          clearInterval(myTimer);
          alert("Reached zero");
        }
      }
    }
    
    
    function end() {
        clearInterval(myTimer)
    }
 
    return {start:start, end:end};
  })(document);

