const loadFishes = require('./ajax.js');

const whenFishesLoad = (data) => {
  console.log('JSON Data: ', data);
};

const whenFishesFails = (error) => {
  console.log('sad day', error);
};

const startApplication = () => {
  loadFishes(whenFishesLoad, whenFishesFails);
};

module.exports = startApplication;
