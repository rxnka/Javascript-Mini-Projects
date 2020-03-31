var fruits = ["grape", "banana", "peach"];
document.getElementById("array").innerHTML = fruits;
for (let i = 0; i < fruits.length; i++) {
  console.log(`There's a ${fruits[i]} in the market.`);
}