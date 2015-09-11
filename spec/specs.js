describe('findAndReplace', function() {

  it('will find a word in a string and replace it with a new word', function() {
    expect(findAndReplace('hello world', 'hello', 'hi')).to.equal('hi world');
  });

  it('will return instruction to try again if word is not part of the string', function() {
    expect(findAndReplace('hello world', 'halo', 'hi')).to.equal("Your entered word is not part of your sentence. Try again");
  });

  it('will find a word in a string and replace it with a new word regardless of case', function() {
    expect(findAndReplace('Hello world', 'hello', 'Hi')).to.equaul('Hi world');
  });

  debugger;
});
