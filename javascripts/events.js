// Filter fish that are "on sale"

const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle(changeButtonText());
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === 'Show Sale Fish') {
      returnText = 'Show All Fish';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

// Add fish to "Basket"
const moveToCart = (e) => {
  const fish = $(e.target).closest('.fish');
  console.log(fish);
  $('#snagged').append(fish);
};

const bindEvents = () => {
  $('button.add').click(moveToCart);
  $('#show-sale').click(filterFish);
};

module.exports = bindEvents;
