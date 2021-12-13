function compileCode() {

    throw new Error('you are using the wrong ');
  }
  
  test('compiling goes as expected', () => {
    expect(() => compileCode()).toThrow();
    expect(() => compileCode()).toThrow(Error);
    expect(() => compileCode()).toThrow('you are using the wrong ');
    
  })
  

  test.only('this will be the test that runs', () => {
    expect(true).toBe(true);
  });
