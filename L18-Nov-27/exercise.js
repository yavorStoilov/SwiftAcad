var bikes = [
  {
    name: "Drag",
    price: 200
  },
  {
    name: "RAM",
    price: 500
  },
  {
    name: "Scott",
    price: 1200
  },
  {
    name: "Balkan",
    price: "800"
  }
];

// Задача 2 (слайд 23) от презентацията:

function logBikes(bikes) {
  bikes.forEach(function(bike) {
    console.log(bike.name + ": " + bike.price + "$");
  });
}

function logBikesWithReturn(bikes) {
  var result = "";
  bikes.forEach(function(bike) {
    result += bike.name + ": " + bike.price + "$\n";
  });
  return result;
}


// Задача 3 (слайд 24) от презентацията:

bikes.filter(function(bike) {
  return bike.price > 300;
});

function filterByPrice(arr, lowestPrice, highestPrice) {
  var result = arr.filter(function(item) {
    return item.price >= lowestPrice && item.price < highestPrice;
  });
  result = result.map(function(item) {
    return item.name;
  });
  return result;
}

function filterByPriceRefactored(arr, lowestPrice, highestPrice) {
  return arr
    .filter(function(item) {
      return item.price >= lowestPrice && item.price < highestPrice;
    })
    .map(function(item) {
      return item.name;
    });
}
