describe('The greet', function() {
  it('should greet yanga in English', function() {
    assert.equal(greetings("yanga","English"), "Hello,yanga")
  });
  it('should greet yanga in Swahili', function() {
    assert.equal(greetings("yanga","Swahili"), "Hodi,yanga")
  });
  it('should greet yanga in isiXhosa', function() {
    assert.equal(greetings("yanga","isiXhosa"), "Molo,yanga")
  });
});
