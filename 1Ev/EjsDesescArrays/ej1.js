let players = [
    ["Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski"],
    ["Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", "Gotze"],
  ];
  
  // a. Crear players1 y players2
  const [players1, players2] = players;

  console.log(players1);
  console.log(players2);
  
  
  // b. Crear gk y fieldPlayers
  const [gk, ...fieldPlayers] = players1;
  
  // c. Crear allPlayers
  const allPlayers = [...players1, ...players2];
  
  // d. Crear players1Final
  const players1Final = [...players, 'Thiago', 'Coutinho', 'Perisic'];