const team = {
  _players: [{
    firstName: "Ryan" ,
    lastName: "Garcia",
    age: 22
  },
  {
    firstName: "Paulo",
    lastName: "Costa",
    age: 25
  },
  {
    firstName: "julio",
    lastName: "Rodriguez",
    age: 23,
  }
   ],
  _games: [
  {
    opponent: "Sharkens",
    teamPoints: 22,
    opponentPoints:20
  },
  {
    opponent: "Rakuda rapids",
    teamPoints: 3,
    opponentPoints:8
  },
  {
    opponent: "Bulls",
    teamPoints: 16,
    opponentPoints:10
  }
],

get players(){
  return this._players;
},
get games(){
  return this._games;
},

addPlayer(firstName,lastName,age){
  let player = {
    firstName: firstName,
    lastName: lastName,
    age:age
  };
  this.players.push(player)
},
addGame(opponent,teamPoints,opponentPoints){
  const games = {
    opponent: opponent,
    teamPoints: teamPoints,
    opponentsPoints: opponentPoints
  };
return this.games.push(games);
}

};

team.addPlayer("Steph","Curry",28);
team.addPlayer("Lisa","Leslie",44);
team.addPlayer("Bugs","Bunny",76);
console.log(team.players)

team.addGame("barakuda",33,30);
team.addGame("simpletons",24,30);
team.addGame("mighty morphers",14,5);
console.log(team.games);