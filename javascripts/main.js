// Filter fish that are "on sale"

// Add fish to "Basket"
const moveToCart = (e) => {
  let fish = $(e.target).closest('.fish');
  console.log(fish);
  $('#snagged').append(fish);
};

$('button.add').click(moveToCart);