(function(){
  class Bike {
    constructor (brand, price, color, weight, bikeStyle){
      this.brand = brand;
      this.price = price;
      this.color = color;
      this.weight = weight;
      this.bikeStyle = bikeStyle;
      
    }
}
var el_down = document.getElementById("GFG_DOWN"); 

function toHtml(obj){
  var string = ''; 

  for(var prop in obj) { 
    if(typeof obj[prop] == 'string') { 
        string+= prop + ': ' + obj[prop]+'; </br>'; 
    } 
    else { 
        string+= prop + ': { </br>' + print(obj[prop]) + '}'; 
    } 
    return string; 
  } 
  function gfg_Run() {  
    el_down.innerHTML = toHtml(Bike); 
  }
}
})();