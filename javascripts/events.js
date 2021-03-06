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
  $(e.target).text('Remove from Cart').removeClass('add').addClass('remove');
};

const removeFromCart = (e) => {
  const fishCard = $(e.target).closest('.fish');
  $('#available').append(fishCard);
  $(e.target).text('Add to Cart').removeClass('remove').addClass('add');
};

const bindEvents = () => {
  $('body').on('click', '.remove', removeFromCart);
  $('body').on('click', '.add', moveToCart);
  $('#show-sale').click(filterFish);
};

module.exports = bindEvents;
