// //challange 1

// const game = {
//     team1: 'Bayern Munich',
//     team2: 'Borrussia Dortmund',
//     players: [
//       [
//         'Neuer',
//         'Pavard',
//         'Martinez',
//         'Alaba',
//         'Davies',
//         'Kimmich',
//         'Goretzka',
//         'Coman',
//         'Muller',
//         'Gnarby',
//         'Lewandowski',
//       ],
//       [
//         'Burki',
//         'Schulz',
//         'Hummels',
//         'Akanji',
//         'Hakimi',
//         'Weigl',
//         'Witsel',
//         'Hazard',
//         'Brandt',
//         'Sancho',
//         'Gotze',
//       ],
//     ],
//     score: '4:0',
//     scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//     date: 'Nov 9th, 2037',
//     odds: {
//       team1: 1.33,
//       x: 3.25,
//       team2: 6.5,
//     },

//   };

// //1
//   const [players1,players2] = game.players;
// //   console.log(players1);

// //2
//   const [gk,...fieldPlayers] = players1;
// //  console.log(gk,fieldPlayers);

// //3
// const allPlayers = game.players;
// // console.log(allPlayers);

// //4
// const playersFinal = [...players1 , 'Thiago', 'Coutinho', 'Perisic'];
// // console.log(playersFinal)

// //5
// const {odds : {team1 , x : draw , team2}} = game;
// // console.log(team1 , draw , team2);

// //6
// const printGoals = (...players)=>{

//     console.log(`Players are : ${players} players and ${players.length} goals r scored`);
// }
// printGoals(...game.scored);
// // console.log(...game.scored);

// //7
// team1<team2 && console.log(`team 2 wins!`)
// team1>team2 && console.log(`team 1 wins!`)
// team1===team2 && console.log(`DRAW!`)

//challange2

//1
// const allPlayers = [...game.scored];
// // console.log(allPlayers);
// for(const [ind,player]  of allPlayers.entries()){
//    console.log(`${ind + 1} : ${player}`);
// }

//2
// const score = Object.values(game.odds)
// console.log(score);
// let totalScore = 0
// for(scores of score){
//     totalScore += scores;
// }
// let avgScore = totalScore/score.length;
// console.log(avgScore);

// //3
// for(const [team,score] of Object.entries(game.odds)){
//     // console.log(team,score);
//     const teamName = team==='x' ? "DRAW" : `${game.team}`
//     console.log(`Odd of victory ${teamName} : ${score}`)

// }

// //4
// const players = [...game.scored];
// console.log(players);
// const scorers = {

// }

//challange 3
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
//   ]);

// //1
// const events = new Set(gameEvents.values());
// console.log(events)

// //2
// gameEvents.delete(64);
// console.log(gameEvents);

// //3
// const size = gameEvents.size;
// console.log(`An event happen on an Average of every ${90/size} mins`)

// //4
// let half;
// for ([key,values] of gameEvents){
//   (key>0 && key<45) ? half = 'First Half' : half = 'Second Half'
//   console.log(`[${half}] ${key} : ${values}`)
// }

//CHallange 4
document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const [...words] = text.split("\n");
  let tick = "✅";
  let count = 1;
  for (word of words) {
    const [firstWord, lastWord] = word.split("_");
    let first = firstWord.toLowerCase().trimStart();
    let last = `${lastWord[0].toUpperCase()}${lastWord.toLowerCase().slice(1)}`;
    const finalWord = `${first}${last}`;
    console.log(`${finalWord.padEnd(20,'+')}${tick.repeat(count)}`);
    count++;
  }
});
