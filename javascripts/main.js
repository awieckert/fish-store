// Filter fish that are "on sale"

const filterFish = () => {
  $('#available .fish').not('.on-sale').toggle(changeButtonText());
};

const changeButtonText = () => {
  $('#show-sale').text((i, text) => {
    let returnText = '';
    if (text === "Show Sale Fish") {
      returnText = 'Show All Fish';
    } else {
      returnText = 'Show Sale Fish';
    }
    return returnText;
  });
};

$('#show-sale').click(filterFish);

// Add fish to "Basket"
const moveToCart = (e) => {
  let fish = $(e.target).closest('.fish');
  console.log(fish);
  $('#snagged').append(fish);
};

$('button.add').click(moveToCart);