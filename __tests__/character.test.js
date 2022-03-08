import Character from './../src/js/character.js'

describe('Character', () => {

  test('should correctly return the character object with special ability', () => {
    const character = new Character('Spike', 50, 70, 'Chain', 'Sunlight');
    expect(character.name).toEqual('Spike');
    expect(character.health).toEqual(50);
    expect(character.strength).toEqual(70);
    expect(character.attack).toEqual('Chain');
    expect(character.specialAbility).toEqual('Sunlight');
    expect(character.level).toEqual(1);
  });
  
});

describe('dayWalker', () => {

  test('should correctly create a dayWalker object with a familiar, and blood', () => {
    const character = new Character();
    character.dayWalker();
    expect(character.familiar).toEqual(0);
    expect(character.blood).toEqual(" ");
  });

});

describe('undead', () => {

  test('should correctly create an undead object', () => {
    const character = new Character();
    character.undead();
    expect(character.undeadType).toEqual(0);
    expect(character.undeadSmell).toEqual(" ");
    expect(character.undeadRealm).toEqual(" ");
  });

});