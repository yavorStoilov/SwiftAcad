(function () {
  'use strict';
  class Bike {
    constructor(brand, price, color, weight, bikeStyle, toHTML) {
      this.brand = brand;
      this.price = price;
      this.color = color;
      this.weight = weight;
      this.bikeStyle = bikeStyle;

      this.toHTML = function () {
        var header = "<h1> " + this.brand + "</h1>";
        var body = `<div>
                  <p> ` + this.price + `$</p>
                  <p>` + this.weight + `kg</p>
                  </div>` ;
        return header + body;
      }
    }
  }

  var bmx = new Bike('BMX', '1200', 'blue', '15', 'cross');
  var drag = new Bike('DRAG', '1250', 'red', '28', 'drag');

  var bikesArray = [bmx, drag];

  bmx.toHTML();

  var container = document.querySelector("#container");
  bikesArray.forEach(function (bike) {
    container.innerHTML += bike.toHTML();
  });

})();