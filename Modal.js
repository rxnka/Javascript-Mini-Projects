var modalbtn = document.getElementById("modalBtn");
var modal = document.getElementById("modal");
var closebtn = document.getElementsByClassName("close")[0];

modalbtn.onclick = function() {
  modal.style.display = "block";
};
closebtn.onclick = function() {
  modal.style.display = "none";
};