describe('findAndReplace', function() {

  it('will find a word in a string', function() {
    expect(findAndReplace('hello world', 'hello')).to.equal('hello');
  });

  it('will find a word in a string and replace it with a new word', function() {
    expect(findAndReplace('hello world', 'hello', 'hi')).to.equal('hi');
  });
  debugger;
});
