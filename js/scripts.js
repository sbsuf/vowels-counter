$(document).ready(function() {
  $("form#vowels").submit(function(event) {
    var input = ($("input#sen").val());
   	var arrInput = input.split("");
    finalInput = [];
    for (i=0; i<arrInput.length; i++) {
    	if ((arrInput[i] === "a") || (arrInput[i] === "e") || (arrInput[i] === "i") || (arrInput[i] === "o") || (arrInput[i] === "u"))
      finalInput.push(arrInput[i]);
  }

    	var finalCount = finalInput.length;
    alert(finalCount);
    event.preventDefault();
    });
  });
