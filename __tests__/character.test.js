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

describe('levelUp', () => {

  test('should increase level value by 1', () => {
    const character = new Character();
    character.levelUp();
    expect(character.level).toEqual(2);
  });

});

describe('battleRollAl', () => {
  
  test('should return a number greater than or equal to 1', () => {
    const character = new Character();
    character.battleRollAl();
    expect(character.roll1).toBeGreaterThanOrEqual(1);
  });

  test('should return a number less than or equal to 20', () => {
    const character = new Character();
    character.battleRollAl();
    expect(character.roll2).toBeLessThanOrEqual(20);
  });

});

describe('inventoryLimiter', () => {
  
  test('should return an empty array', () => {
    const character = new Character();
    character.inventoryLimiter();
    expect(character.bag).toEqual([]);
  });

  test('should return an array of five items in the bag variable', () => {
    const character = new Character('billybob', 50, 10, 39, 'jelly bomb');
    character.bag = [1,2,3,4,5,6,7];
    character.inventoryLimiter();
    expect(character.bag).toEqual([1,2,3,4,5]);
  });
});