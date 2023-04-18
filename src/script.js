"use strict";

const randomDamage = () => {
  return Math.floor(Math.random() * 10 + 1);
};

const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2);
  return randNum === 0 ? opt1 : opt2;
  //if (randNum === 0) {
  //  return opt1;
  //} else {
  //  return opt2;
  //}
};

const attackPlayer = function (health) {
  return health - randNum;
};

const logHealth = (player, health) => {
  return console.log(`${player}health: ${health}`);
};

const logDeath = (winner, loser) => {
  return console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  return health <= 0 ? true : false;
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      let player2Health = attackPlayer(player2Health);

      logHealth(player2, player2Health);
      if ((player2Health = isDead)) logDeath(player1, player2);
      break;
    } else {
      let player1Health = attackPlayer(player1Health);
    }
    logHealth(player1, player2);
    if ((player1Health = isDead)) {
      logDeath(player2, player1);
      break;
    }
  }
}

console.log(fight("Troy", "Brad", 100, 100));
