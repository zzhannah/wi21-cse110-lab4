let statistics = {
  redCars: 21,
  blueCars: 45,
  greenCars: 12,
  raceCars: 5,
  blackCars: 40,
  rareCars: 2
}

for (let car in statistics) {
  if (car[0] == 'r') {
    console.log(`${car}: ${statistics[car]}`);
  } 
  else if (statistics[car]%2 == 1) {
    console.log(`${car}: ${statistics[car]}`);
  }
}