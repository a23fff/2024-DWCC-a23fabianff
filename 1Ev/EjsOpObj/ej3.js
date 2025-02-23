const game = {
    scored: ["Lewandowski", "Gnabry", "Lewandowski", "Hummels"]
  };
  
  // a. Mostrar información dos goles
  game.scored.forEach((player, index) => {
    console.log(`Gol ${index + 1}: ${player}`);
  });
  
  // b. Crear obxecto scorers
  const scorers = {};
  game.scored.forEach((player) => {
    scorers[player] = (scorers[player] || 0) + 1;
  });
  
  console.log("Scorers:", scorers);