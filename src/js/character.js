export default class Character {
  constructor (name, health, strength, attack, specialAbility) {
    this.name = name;
    this.health = health;
    this.strength = strength;
    this.attack = attack;
    this.specialAbility = specialAbility;
    this.level = 1;
    // this.type = " ";
  }
  
  dayWalker() {
    // this.type = "dayWalker";
    this.familiar = 0;
    this.blood = " ";
    
  }

  undead() {
    // this.type = "undead";
    this.undeadType = 0;
    this.undeadSmell = " ";
    this.undeadRealm = " ";
  }
  
  levelUp() {
    this.level += 1;
  }

  battleRollAl() {
    this.roll1 = Math.floor(Math.random() * 20 + 1);
    this.roll2 = Math.floor(Math.random() * 20 + 1);
  }
}

// export default class Character {
//   constructor (name, stats, specialAbility) {
//     this.name = name;
//     this.specialAbility = specialAbility;
//     this.level = 1;
//     this.stats = {
//       health: 50,
//       strength: 70,
//       attack: 'Chain',
//     };
//     // this.type = " ";
//     // level method
//   }
  
//   dayWalker() {
//     // this.type = "dayWalker";
//     this.familiar = 0;
//     this.blood = " ";
    
//   }

//   undead() {
//     // this.type = "undead";
//     this.undeadType = 0;
//     this.undeadSmell = " ";
//     this.undeadRealm = " ";
//   }
  
//   levelUp() {
//     this.stats = [];
//   }
// }