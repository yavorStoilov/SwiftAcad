function Hero(name, knownAs) {
this.name = name;
this.nickname = knownAs || name;
  this.kickAss = function (enemy) {
     // actions to kick the enemy's ass
     console.log(this.name + " just kicked " + BadGuy.name + "'s ass.")
  };
  this.saveWorld = function () {
    // actions to save the world
    console.log("Once again " + this.nickname + " saved the world!");
  };
}
var superman = new Hero("Clark Kent", "Superman");
var chuck = new Hero("Chuck Norris");
superman.saveWorld();

function BadGuy(name, knownAs){
	this.name = name;
	this.knownAs = knownAs;
}

var joker = new BadGuy("Joker");
var beast = new BadGuy("Beast");

superman.kickAss(joker);