$("#polygon").keydown(function(e) {	
  if (e.keyCode == "39") {
    nDegreesRight(10)
  }
})

$("#polygon").keydown(function(e) {	
  if (e.keyCode == "38") {
   goForward(10)
  }
})

$("#polygon").keydown(function(e) {	
  if (e.keyCode == "37") {
    nDegreesRight(10)
  }
})

//gameInput.keydown(function(keydownEvent) {
//
//  if(keydownEvent.keycode == "39") {
//    nDegreesRight(10)
//  }
//  
//  if(keydownEvent.keycode == "37") {
//    nDegreesLeft(10)
//  }
//  
//  if(keydownEvent.keycode == "37") {
//    goForward(10)
//  }
//  
//})