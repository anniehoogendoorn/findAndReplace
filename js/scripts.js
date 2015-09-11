var findAndReplace = function(inputString, word) {

  var inputArray = inputString.split(" ");

  for (var i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === word) {
      return inputArray[i];
    }
  }

}
