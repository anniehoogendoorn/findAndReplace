var findAndReplace = function(input_string, word, new_word) {

  //RegEx to ignore casing ("i") and replace multiple words ("g")
  var word = new RegExp(word, "gi");

  //Check if word is part of input string
  if (input_string.match(word)) {
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

    $("#result").text(result);
    $("#results").show();

    event.preventDefault();
    debugger;
  });

});
