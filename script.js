// var play = prompt("do you want to play?")
//   if (play == "yes" ){
//   prompt ("Enter your Name");
//   document.write(name);
//  console.log()
//
// var userHealth = 40;
// var grantHealth = 10;
// var wins = 0;
//
//
//
// }while (wins < 3 && userHealth > 0) {
//   userHealth  -= Math.floor(Math.random() * 2) + 1;
//   grantHealth -= Math.floor(Math.random() * 2) + 1;
//   console.log('User Health:' + userHealth);
//   console.log('Grant Health:' + grantHealth);
//   if (grantHealth <= 0){
//     wins++;
//     // userHealth=40;
//     console.log("User Wins")
//   }else if (userHealth <= 0){
//     wins++;
//     grantHealth = 10;
//     console.log('Grant Wins')
//   }
// }
//
// /**
// the explained way to do it with excess code commented out
// **/
//
// var play = prompt("do you want to play?")
//   if (play === "yes" ){
//
// var user = prompt ('Please enter your username');
// var userHealth = 40;
// var grantHealth = 10;
// var wins = 0;
//
//
//
// while (wins < 3 && userHealth > 0) {
//   userHealth  -= Math.floor(Math.random() * 2) + 1;
//   grantHealth -= Math.floor(Math.random() * 2) + 1;
//   console.log(`${user} has ${userHealth} health remaining`);
//   console.log(`Grant has ${grantHealth} health remaining`);
//   if (grantHealth <= 0){
//     wins++;
//     // userHealth=40;
//     console.log("User Wins")
//   }else if (userHealth <= 0){
//     wins++;
//     grantHealth = 10;
//     console.log('Grant Wins')
//   }
// }
// if (grantHealth <= 0){
//     wins++;
//     grantHealth = 10;
//     var message = `${user} has 1 victory`;
//     if (wins > 1){
//       message = `${user} has ${wins} victories`;
//     }
//     console.log(message);
//   }
// }
//
// if (wins === 3) {
//   console.log(`${user} won`);
// }else {
//   console.log('Grant won');
// }
// }else {
//   console.log('Game not started, you must type "yes" to begin the game.');
// }
//
// /***
// with functions
// ***/
//
//
//
// startGame();
// function startGame(){
//   var play = prompt('do you want to play?');
//   if (play === "yes" ){
//   var user = prompt ('Please enter your username');
// } startCombat();
//
// function startCombat(){
//   var userHealth = 40;
//   var grantHealth = 10;
//
//   while (wins < 3 && userHealth > 0) {
//   getDamage();
//   userHealth  -= Math.floor(Math.random() * 5) + 1;
//   grantHealth -= Math.floor(Math.random() * 5) + 1;
//   console.log(`${user} has ${userHealth} health remaining`);
//   console.log(`Grant has ${grantHealth} health remaining`);
//   }
//
//   }
// }
// getDamage()
// function getDamage() {
//   var wins = 0;
//     - Math.floor(Math.random() * 5) + 1;
//   }
// var attack = prompt('Would you like to attack or quit?');
//   if (attack === "attack" ){
//   while (wins < 3 && userHealth > 0) {
//   getDamage();
//   userHealth  -= getDamage();
//   grantHealth -= getDamage();
//   console.log(`${user} has ${userHealth} health remaining`);
//   console.log(`Grant has ${grantHealth} health remaining`);
//   }
//     getDamage();
//   }
//     console.log('Game Over');
//
//Globals
var userHealth = 40;
var grantHealth = 10;
var wins = 0;

// Hook up the start button
var startButton = document.getElementById("startButton");
startButton.onclick = function () {
  document.getElementById("game-wrapper").style.display = "block";
  document.getElementById("start-wrapper").style.display = "none";
  startGame();
}

// Define a function to update the player name
var playerName = document.getElementById("playerName");
function setPlayerName(user) {
  playerName.innerText = user;
}

// Hook up the attack button
var attackButton=document.getElementById("attackButton");
attackButton.onclick=attack;
function attack() {
  userHealth -= getDamage();
  grantHealth -= getDamage();
  console.log(`The user has ${userHealth} health remaining`);
  console.log(`Grant has ${grantHealth} health remaining`);

  var playerHeathProgressBar = document.getElementsByClassName("playerHealth")[0];
  playerHeathProgressBar.value = userHealth;

  if (grantHealth <= 0) {
    wins++;
    grantHealth = 10;
    var message = `The user has 1 victory`
    if (wins > 1) {
      var message = `The user has 1 victory`
    }
  }
}



function startGame() {
  var user = prompt('Please enter your name');
  setPlayerName(user);
  startCombat(user);
}












//
//
// class Computer {
//   constructor(name, health){
//     this.name = name;
//     this.health = health;
//   }
//   generateAttackDamage(){
//    return getRandom(5);
//   }
//
// }
//
// class Character extends Computer {
//   constructor(name, health, healsRemaining){
//     super (name, health);
//     this.healsRemaining = healsRemaining;
//     this.wins = 0;
//   }
//   generateAttackDamage(){
//     return getRandom(3);
//   }
//   heal(){
//     this.health += getRandom(10);
//     this.healsRemaining--;
//   }
// }
//
//
//
// function getRandom (max){
//     return Math.floor(Math.random() * max) + 1;
// }
//
// startGame();
// function startGame (){
//   var play = prompt( 'do you want to play?');
//   if (play.toLowerCase() === 'yes'){
//     var userName = prompt ('enter your name');
//     startCombat(userName);
//   }else {
//     console.log('Game Over');
//   }
// }
//
//
// function startCombat (userName){
//   var user = new Character(userName, 40, 2);
//   var grant = new Computer('grant', 10 );
//
//
//   while (user.wins < 5 && user.health > 0) {
//     var attack = prompt('Do you want to attack, heal, or quit?');
//     if(attack === 'quit'){
//       console.log('Game Over');
//       return;
//     }
//
//     if(attack === 'attack'){
//     user.health  -= grant.generateAttackDamage();
//     grant.health -= user.generateAttackDamage();
//     console.log(`${user.name} has ${user.health} health remaining`);
//     console.log(`Grant has ${grant.health} health remaining`);
// }
//   if (attack === 'heal'){
//     user.heal();
//     console.log(`${user.name} has healed and has ${user.health}`);
//   }
//   if (grant.health < 1){
//       user.wins++;
//       grant.health = 10;
//       var message = `${user.name} has 1 victory`;
//     }
//       if (user.wins > 1){
//         message = `${user.name} has ${user.wins} victories`;
//       console.log(message);
//     }
//     if (user.healsRemaining === 0){
//       grant.generateAttackDamage();
//       user.generateAttackDamage();
//       console.log(`${user.name} has ${user.health} health remaining`);
//       console.log(`Grant has ${grant.health} health remaining`);
//     }
//
// }
//
// if (user.wins === 5){
//     console.log(`${user.name} won`);
//   }else {
//     console.log('Grant won');
//   }
//   }
  // else {
  //   console.log('Game not started, you must type "yes" to begin the game.');
  // }

// getRandom();
// startCombat();
