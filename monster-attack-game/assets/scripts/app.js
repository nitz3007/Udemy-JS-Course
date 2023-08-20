const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;
const MONSTER_ATTACK_VALUE = 14;

const MODE_ATTACK = 'ATTACK';
const MODE_STRONG_ATTACK = 'STRONG_ATTACK';
const LOG_ENTRY_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_ENTRY_STRONG_PLAYER_ATTACK = 'STRONG_PLAYER_ATTACK';
const LOG_ENTRY_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_ENTRY_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_ENTRY_GAME_OVER = 'GAME_OVER';

const enteredNumber = prompt('Maximum life for you and the monster', '100');
let chosenMaxLife = parseInt(enteredNumber);

if(isNaN(chosenMaxLife) || chosenMaxLife<= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
let battleLog = [];


adjustHealthBars(chosenMaxLife);
  
function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  resetGame(chosenMaxLife);
}

function endRound() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamage;
  writeToLog(
    LOG_ENTRY_MONSTER_ATTACK,
    playerDamage,
    currentMonsterHealth,
    currentPlayerHealth
  );

  if(currentPlayerHealth <=0 && hasBonusLife) {
    hasBonusLife= false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    setPlayerHealth(initialPlayerHealth);
    alert('You would have been dead but bonus life saved you!');
  }

  if(currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('You won!');
    writeToLog(
      LOG_ENTRY_GAME_OVER,
      'PLAYR WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if(currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('You Lost!');
    writeToLog(
      LOG_ENTRY_GAME_OVER,
      'MONSTER WON',
      currentMonsterHealth,
      currentPlayerHealth
    );
  } else if(currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('You have a draw!');
    writeToLog(
      LOG_ENTRY_GAME_OVER,
      'A DRAW',
      currentMonsterHealth,
      currentPlayerHealth
    );
  }

  if(currentMonsterHealth<= 0 || currentPlayerHealth<=0) {
    reset();
  }
}

function writeToLog (e, val, monsterHealth, playerHealth) {
  let logEntry = {
    event: e,
    value: val,
    monsterHealth: monsterHealth,
    playerHealth: playerHealth
  }
  if(e === LOG_ENTRY_PLAYER_ATTACK) {
    logEntry.target = 'MONSTER';
  } else if(e=== LOG_ENTRY_STRONG_PLAYER_ATTACK) {
    logBtn.target = 'MONSTER';
  } else if (e === LOG_ENTRY_MONSTER_ATTACK) {
    logEntry.target = 'PLAYER';
  } else if (e=== LOG_ENTRY_PLAYER_HEAL) {
    logEntry.target = 'PLAYER';
  }
  battleLog.push(logEntry);
}

function attackMonster(mode) {
  let maxDamage;
  let attackLog;
  if(mode===MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
    attackLog = LOG_ENTRY_PLAYER_ATTACK;
  } else if(mode===MODE_STRONG_ATTACK) {
    maxDamage = STRONG_ATTACK_VALUE;
    attackLog = LOG_ENTRY_STRONG_PLAYER_ATTACK;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  writeToLog(
    attackLog,
    damage,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function attackHandler() {
  attackMonster(MODE_ATTACK);
}

function strongAttackHandler() {
 attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler () {
  let healValue;
  if(currentPlayerHealth > chosenMaxLife - HEAL_VALUE) {
    healValue = chosenMaxLife-currentPlayerHealth;
  } else {
    healValue= HEAL_VALUE;
  }
  increasePlayerHealth(healValue);
  currentPlayerHealth += healValue;
  writeToLog(
    LOG_ENTRY_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
  );
  endRound();
}

function logHandler () {
  console.log(battleLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', logHandler)