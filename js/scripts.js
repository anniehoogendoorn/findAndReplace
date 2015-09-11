// var findAndReplace = function(inputString, word, newWord) {
//
//   var inputArray = inputString.split(" ");
//   var outputArray = []
//
//   for (var i = 0; i < inputArray.length; i++) {
//     if (inputArray[i] === word) {
//     outputArray = inputArray.replace([i], newWord);
//     }
//   }
//
// }




var findAndReplace = function(input_string, word, new_word) {

  // var input_string;
  var output_string = input_string.replace(word, new_word);

  return output_string;
}


$(document).ready(function() {
  $("form#user_input").submit(function(event) {
    var input_string = $("input#input_string").val();
    var word = $("input#word").val();
    var new_word = $("input#new_word").val();
    var result = findAndReplace(input_string, word, new_word);

    $("#result").text(result);
    $("#results").show();
    event.preventDefault();
    debugger;
  });

});
