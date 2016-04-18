// var example = 'this example exists';
// example = example.replace('exists', 'is awesome');
// console.log(example);


var pizza = 'pizza is alright';
// pizza = pizza.replace('pizza is alright', 'pizza is wonderful'); 
// console.log(pizza);

var pizzaArray = pizza.split(' ');

var tossedPizza = pizzaArray.slice(0, -1);


var garnishedPizza = tossedPizza.push('wonderful');

var newPizza = tossedPizza.join(' ');

console.log(newPizza);

