describe('findAndReplace', function() {

//one step simpler: replace 'hello' with 'hi' and output 'hi' instead of using a full sentence
  it('will match a single word and replace it with a different one', function() {
      expect(findAndReplace('hello', 'hello', 'hi')).to.equal('hi');
  });

  it('will find a word in a string and replace it with a new word', function() {
    expect(findAndReplace('hello world', 'hello', 'hi')).to.equal('hi world');
  });

//nice work on remembering negative cases!
  it('will return instruction to try again if word is not part of the string', function() {
    expect(findAndReplace('hello world', 'halo', 'hi')).to.equal("The word you want to replace is not part of your sentence. Try again!");
  });

  it('will find a word in a string and replace it with a new word regardless of case', function() {
    expect(findAndReplace('Hello world', 'hello', 'Hi')).to.equal('Hi world');
  });

  it("will find and replace multiple instances of a word", function() {
    expect(findAndReplace('Hello world world', 'world', 'planet')).to.equal('Hello planet planet')
  });

//punctuation test
//complete matches: search in 'hello' for 'he' and replace it with 'blah' should return error: "The word you want to replace is not part of your sentence. Try again!"

});
