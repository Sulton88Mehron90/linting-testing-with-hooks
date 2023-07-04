// function createRocket() {
//   return {
//     name: '',
//     fuel: 'empty',
//     astronauts: [],
//     enginesIgnited: false,
//     cargoDoors: 'closed',
//     cargo: [],
//   };
// }

function createRocket(name = '') {
  return {
    name,
    fuel: 'empty',
    astronauts: [],
    enginesIgnited: false,
    cargoDoors: 'closed',
    cargo: [],
  };
};


function loadAstronauts(rocket, astronaut) {
  rocket.astronauts.push(astronaut);
  return rocket;
}

function lightThisCandle(rocket) {
  rocket.enginesIgnited = true;
  return rocket;
}

function fillFuelTanks(rocket) {
  rocket.fuel = 'full';
  return rocket;
}

module.exports = {
  createRocket,
  loadAstronauts,
  lightThisCandle,
  fillFuelTanks,
};

