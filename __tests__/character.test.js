import Character from './../src/js/character.js'

describe('Character', () => {

  test('should correctly create a character object with a name', () =>
  {
    const character = new Character('Spike');
    expect(character.name).toEqual('Spike');
  });

  // test('should correctly return the character object with health', () =>
  // {
  //   const character = new Character(50);
  //   expect(character.health).toEqual(50);
  // });
});