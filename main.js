/* Presetting some values to make my life easier */

var coords = document.getElementById("coords");
var ball = document.getElementById("ball");
var moveOnMe = document.getElementById("mouseOnMe");

/* Setting the coordinates of the ball to the cursor position */

moveOnMe.onmousemove = ballCoords;

function ballCoords(mouseEvent) {
  var xpos;
  var ypos;
  
  if (mouseEvent) {
    
    //FireFox
    xpos = mouseEvent.pageX + "px";
    ypos = mouseEvent.pageY + "px";
    
  } else {
    
    //IE
    xpos = window.event.x + document.body.scrollLeft - 2;
    ypos = window.event.y + document.body.scrollTop - 2;
    
  }
  
 // coords.innerHTML = xpos + ", " + ypos;
  ball.style.top = ypos;
  ball.style.left = xpos;
}

/* Centering the ball */

var translateX = ball.style.width;
var translateY = ball.style.height;

ball.style.transform = "translate(" + translateX + ", " + translateY + ")";