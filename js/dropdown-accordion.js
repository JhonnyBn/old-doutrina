function myAccFunc1() {
  var x = document.getElementById("toolAcc1");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-dark-grey";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-dark-grey", "");
  }
}

function myAccFunc2() {
  var x = document.getElementById("toolAcc2");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-dark-grey";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-dark-grey", "");
  }
}

function myAccFunc3() {
  var x = document.getElementById("toolAcc3");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    x.previousElementSibling.className += " w3-dark-grey";
  } else { 
    x.className = x.className.replace(" w3-show", "");
    x.previousElementSibling.className = 
    x.previousElementSibling.className.replace("w3-dark-grey", "");
  }
}
