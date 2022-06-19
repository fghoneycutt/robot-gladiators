// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var fight= function(enemy){
    while(enemy.health>0 && playerHealth>0){
        var promptFight= window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight==="skip" || promptFight==="SKIP"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            if (confirmSkip){
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                playerInfo.money= Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
        if (promptFight === "fight" || promptFight==="FIGHT"){
            var damage = randomNumber(playerInfo.attack-3, playerInfo.attack);
            enemy.health= Math.max(0, enemy.health - damage);
            console.log(
                playerInfo.name + " attacked " + enemy.name + ". "+ enemy.name + " now has " + enemy.health + " health remaining.");
            if  (enemy.health <= 0){
                window.alert(enemy.name + " has died!");
                break;
                }
                else {
                    window.alert(enemy.name + " still has " + enemy.health + " health left.");
                }
            var damage = randomNumber(enemy.attack-3, enemy.attack);
            playerHealth= Math.max (0, playerHealth - damage);
            console.log(
                enemy.name + " attacked " + playerInfo.name + ". "+ playerInfo.name + " now has " + playerHealth + " health remaining.");
            if (playerHealth <=0){
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(playerInfo.name + " still has " + playerHealth + " health left.")
            }
        }
            else {
                window.alert("You need to choose a valid option. Try again!");
            }
        }
    }
var startGame= function(){
    playerInfo.reset();
    for(var i =0; i<enemyInfo.length; i++){
        if (playerHealth>0){
            window.alert("Welcome to Robot Gladiators Round " + (i+1));
            var pickedEnemyObj=enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40,60);
            fight(pickedEnemyObj);
            if (playerHealth > 0 && i<enemyNames.length -1){
                var storeConfirm=window.confirm("The fight is over, visit the store before the next round?");
                if(storeConfirm){
                    shop();
                }
            }
        }else{
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    endGame();
};
var endGame= function(){
    if (playerHealth>0){
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
    }else{
        window.alert("You've lost your robot in battle.");
    };
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if (playAgainConfirm){
        startGame();
    }else{
        window.alert("Thank you for playing Robot Gladiatiors! Come back soon!")
    }
};
var shop=function(){
    var shopOptionPrompt= window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill":
            playerInfo.refillHealth();
            break;
        case 'UPGRADE':
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case 'LEAVE':
        case "leave":
            window.alert("leaving the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.")
            shop();
            break;
    }
}
var randomNumber=function(min, max){
    var value=Math.floor(Math.random()*(max-min+1) + min);
    return value;
}
var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money=10;
        this.attack=10;
    },
    refillHealth:function(){
        if (this.money>=7){
            window.alert("Refilling player's health by 20 for $7");
            this.health += 20;
            this.money -= 7;
        }else{
            window.alert("You don't have enough money!")
        }
    },
    upgradeAttack:function(){
        if (this.omey>=7){
            window.alert("Upgrading the player's attack by 6 for 7 dollars");
            this.attack +=6;
            this.money -=7;
        }else{
            window.alert("You don't have enough money!");
        }
    }
};
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    }, 
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    }, 
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];
startGame();