const loadFishes = require('./ajax.js');
const writeFishes = require('./fishDom.js');
const initializer = require('./events.js');

const whenFishesLoad = (data) => {
  console.log('JSON Data: ', data);
  const fishArray = data.fishes;
  $('#available').append(writeFishes(fishArray));
  initializer();
};

const whenFishesFails = (error) => {
  console.log('sad day', error);
};

const startApplication = () => {
  loadFishes(whenFishesLoad, whenFishesFails);
};

module.exports = startApplication;
