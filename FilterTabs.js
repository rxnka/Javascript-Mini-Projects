var all = document.querySelectorAll(".fandd");
var food = document.querySelectorAll(".food");
var drink = document.querySelectorAll(".drink");
document.getElementById("all").addEventListener("click", function() {
  for (let i = 0; i < all.length; i++) {
    all[i].style.display = "block";
  }
  document.getElementById("all").classList.add("active");
  document.getElementById("drinks").classList.remove("active");
  document.getElementById("food").classList.remove("active");
});
document.getElementById("drinks").addEventListener("click", function() {
  document.getElementById("drinks").classList.add("active");
  document.getElementById("all").classList.remove("active");
  document.getElementById("food").classList.remove("active");
  for (let i = 0; i < all.length; i++) {
    drink[i].style.display = "block";
    food[i].style.display = "none";
  }
});
document.getElementById("food").onclick = function() {
  document.getElementById("food").classList.add("active");
  document.getElementById("drinks").classList.remove("active");
  document.getElementById("all").classList.remove("active");
  for (let i = 0; i < all.length; i++) {
    drink[i].style.display = "none";
    food[i].style.display = "block";
  }
};