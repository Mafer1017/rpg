export default class Character {
  constructor (name, health, strength, attack, specialAbility) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
    this.specialAbility = specialAbility;
  }
  
  dayWalker() {
    this.familiar = 0;
    this.blood = " ";
  }

  
  undead() {
    this.undeadType = 0;
    this.undeadSmell = " ";
    this.undeadRealm = " ";
  }
}