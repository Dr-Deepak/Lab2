var userChoice =  prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
console.log(computerChoice);

if(computerChoice > 0 && computerChoice < 0.33){
console.log("rock");
}
else if(computerChoice > 0.34 && computerChoice < 0.66){
console.log("paper");
}
else if(computerChoice > 0.67 && computerChoice < 1){
console.log("scissors");
}