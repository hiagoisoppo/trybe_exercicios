const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonAtk = () => {
  const damage = Math.floor(Math.random() * (battleMembers.dragon.strength - 15) + 15);
  return damage;
};

const warriorAtk = () => {
  const damage = Math.floor(Math.random() * ((battleMembers.mage.intelligence * 2) - battleMembers.mage.intelligence) + battleMembers.mage.intelligence);
  return damage;
};

const mageAtk = () => {
  const damage = Math.floor(Math.random() * (battleMembers.dragon.strength - 15) + 15);
  const mana = battleMembers.mage.mana < 15 ? 'Não possui mana suficiente' : 15;
  return { damage , mana};
};

const gameActions = {
  warriorTurn: () => {
    const damage = warriorAtk();
    battleMembers.warrior.damage = damage;
    battleMembers.dragon.healthPoints -= damage;
  },
  mageTurn: () => {
    const { damage } = mageAtk();
    const { mana } = mageAtk();
    battleMembers.mage.damage = damage;
    battleMembers.mage.mana -= mana;
    battleMembers.dragon.healthPoints -= damage;
  },
  dragonTurn: () => {
    const damage = dragonAtk();
    battleMembers.dragon.damage = damage;
    battleMembers.warrior.healthPoints -= damage;
    battleMembers.mage.healthPoints -= damage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn();
gameActions.mageTurn();
gameActions.dragonTurn();
console.log(gameActions.turnResults());
