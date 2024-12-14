const { parse } = require('csv-parse');
const fs = require('fs');

function isHabitable(planet) {
  return (
    planet['koi_disposition'] === 'CONFIRMED' &&
    planet['koi_insol'] > 0.36 &&
    planet['koi_insol'] < 1.11 &&
    planet['koi_prad'] < 1.6
  );
}

const habitablePlanets = [];

console.log('Start parsing file...');
fs.createReadStream('./data/kepler_data.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (data) => {
    if (isHabitable(data)) habitablePlanets.push(data);
  })
  .on('error', (error) => console.log(error))
  .on('end', () => {
    console.log(`${habitablePlanets.length} habitable plantes found`);
    console.log(habitablePlanets.map((planet) => planet['kepler_name']));
    console.log('finished reading data');
  });
