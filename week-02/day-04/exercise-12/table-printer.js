'use strict';
// Create a function that prints the ingredient list of dictionaries to the console in the following format:
//
// +--------------------+---------------+----------+
// | Ingredient         | Needs cooling | In stock |
// +--------------------+---------------+----------+
// | vodka              | Yes           | 1        |
// | coffee_liqueur     | Yes           | -        |
// | fresh_cream        | Yes           | 1        |
// | captain_morgan_rum | Yes           | 2        |
// | mint_leaves        | No            | -        |
// +--------------------+---------------+----------+
//
// The frist columns should be automatically as wide as the longest key

var ingredients = [
	{ 'vodka': 1, 'needs_cooling': true },
	{ 'coffee_liqueur': 0, 'needs_cooling': true },
	{ 'fresh_cream': 1999999999999999, 'needs_cooling': true },
	{ 'captain_morgan_rumbbbbbbbbbbb': 2, 'needs_cooling': true },
	{ 'mint_leaves': 0, 'needs_cooling': false },
	{ 'sugar': 100, 'needs_cooling': false },
	{ 'lime juice': 10, 'needs_cooling': true },
	{ 'soda': 100, 'needs_cooling': true }
];
function drawTable(obj){
  var numIngredient = 12;
  var numCooling = 15;
  var numStock = 10;
	var arrIngredient = [];
	var arrNeedsCooling = [];
	var arrInStock = [];
  obj.forEach(function(value,index,array){
		for(var i in value){
			if(i !== 'needs_cooling'){
				arrIngredient.push(i);
				arrInStock.push(value[i]==0?"-":'' + value[i]);
				if(i.length+2 > numIngredient){
					numIngredient = i.length+2;
				}
				if(('' + value[i]).length > numStock){
					numStock = ('' + value[i]).length + 2;
				}
			}else{
				arrNeedsCooling.push(value[i]?"Yes":"No");
			}
		}
	})
	console.log("+" + "-".repeat(numIngredient) + "+" + "-".repeat(numCooling) + "+" + "-".repeat(numStock) + "+");
	console.log("| Ingredient" + " ".repeat(numIngredient-11) + "| Needs cooling" + " ".repeat(numCooling-14) 
		+ "| In stock" + " ".repeat(numStock - 9) + "|");
	console.log("+" + "-".repeat(numIngredient) + "+" + "-".repeat(numCooling) + "+" + "-".repeat(numStock) + "+");
		
	for(var i=0;i<arrIngredient.length;i++){
		console.log("| " + arrIngredient[i] + " ".repeat(numIngredient-arrIngredient[i].length-1) + "| " + arrNeedsCooling[i] + " ".repeat(numCooling-arrNeedsCooling[i].length-1) 
		+ "| " + arrInStock[i] + " ".repeat(numStock - arrInStock[i].length - 1) + "|");
		
	}
	console.log("+" + "-".repeat(numIngredient) + "+" + "-".repeat(numCooling) + "+" + "-".repeat(numStock) + "+");
}
drawTable(ingredients)