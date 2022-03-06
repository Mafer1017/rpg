import Character from './../src/js/character.js'

describe('Character', () => {

  test('should correctly create a character object with a name', () =>
  {
    const character = new Character('Spike');
    expect(character.name).toEqual('Spike');
  });

  test('should correctly return the character object with health', () =>
  {
    const character = new Character('Spike', 50);
    expect(character.health).toEqual(50);
  });

  test('should correctly return the character object with strength', () =>
  {
    const character = new Character('Spike', 50, 70);
    expect(character.strength).toEqual(70);
  });

  test('should correctly return the character object with attack', () =>
  {
    const character = new Character('Spike', 50, 70, 'Chain');
    expect(character.attack).toEqual('Chain');
  });

  test('should correctly return the character object with special ability', () =>
  {
    const character = new Character('Spike', 50, 70, 'Chain', 'Sunlight');
    expect(character.specialAbility).toEqual('Sunlight');
  });
});