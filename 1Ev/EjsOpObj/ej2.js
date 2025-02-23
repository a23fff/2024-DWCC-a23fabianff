const game = {
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    }
  };
  
  const {
     odds: {
        team1, x: draw, team2
    } 
} = game;
  
  console.log('team1:', team1);
  console.log('draw:', draw);
  console.log('team2:', team2);
  
  