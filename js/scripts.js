var findAndReplace = function(input_string, word, new_word) {

  // var input_string =
  // var word = /word/i

  // If the word is part of the entered sentence
  if (input_string.includes(word)) {
  //replace the word with new word 
  var output_string = input_string.replace(word, new_word);
  return output_string;
  }
  else {
    return "The word you want to replace is not part of your sentence. Try again!"
  }

}


$(document).ready(function() {
  $("form#user_input").submit(function(event) {
    var input_string = $("input#input_string").val();
    var word = $("input#word").val();
    var new_word = $("input#new_word").val();
    var result = findAndReplace(input_string, word, new_word);

    // if (result) {
    //   $("#result").text(result);
    //   $("#results_success").show();
    // }
    // if (!result)  {
    // $("#result").text(result);
    // $("#results_fail").show();
    // }
    $("#result").text(result);
    $("#results").show();
    event.preventDefault();
    // debugger;
  });

});
