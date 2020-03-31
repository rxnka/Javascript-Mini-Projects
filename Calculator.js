var numRe = /^\d+$/;
var btnadd = document.getElementById('add');
var btnsub = document.getElementById('sub');
var btnMul = document.getElementById("multi");
var btnDiv = document.getElementById("divis");
var btnadd = document.getElementById('add');
var btnsub = document.getElementById('sub');
function inputUno() {
  if (numRe.test(document.getElementById("inputOne").value) == false) {
    document.getElementById("oneIPara").innerHTML =
      "<p style='color: red;'>Enter only numbers</p>";
  } else {
    document.getElementById("oneIPara").innerHTML = " ";
  }
}
function inputDos() {
  if (numRe.test(document.getElementById("inputTwo").value) == false) {
    document.getElementById("twoIPara").innerHTML =
      "<p style='color: red;'>Enter only numbers</p>";
  } else {
    document.getElementById("twoIPara").innerHTML = " ";
  }
}
function nullInpUno() {
  if (document.getElementById("inputOne").value == "") {
    document.getElementById("oneIPara").innerHTML =
      "<p style='color: red;'>You need to enter at least a number</p>";
  }
}
function nullInpDos() {
  if (document.getElementById("inputTwo").value == "") {
    document.getElementById("twoIPara").innerHTML =
      "<p style='color: red;'>You need to enter at least a number</p>";
  }
}
function addition(a, b){
    var input1 = parseInt(document.getElementById("inputOne").value);
  var input2 =  parseInt(document.getElementById("inputTwo").value);
  document.getElementById(
    "result"
  ).innerHTML = `<p class="form-control shadow-sm mt-4" > ${input1 + input2}`;
}
function subtraction(a, b){
    var input1 = document.getElementById("inputOne").value;
  var input2 = document.getElementById("inputTwo").value;
  document.getElementById(
    "result"
  ).innerHTML = `<p class="form-control shadow-sm mt-4" > ${input1 - input2}`;
}
function multiply(a, b) {
  var input1 = document.getElementById("inputOne").value;
  var input2 = document.getElementById("inputTwo").value;
  document.getElementById(
    "result"
  ).innerHTML = `<p class="form-control shadow-sm mt-4" > ${input1 * input2}`;
}
function division(a, b) {
  var input1 = document.getElementById("inputOne").value;
  var input2 = document.getElementById("inputTwo").value;
  document.getElementById(
    "result"
  ).innerHTML = `<p class="form-control shadow-sm mt-4" > ${input1 / input2}`;
}
btnadd.addEventListener("click", nullInpUno);
btnadd.addEventListener("click", nullInpDos);
btnadd.addEventListener("click", addition);
btnsub.addEventListener("click", nullInpUno);
btnsub.addEventListener("click", nullInpDos);
btnsub.addEventListener("click", subtraction);
btnMul.addEventListener("click", nullInpUno);
btnMul.addEventListener("click", nullInpDos);
btnMul.addEventListener("click", multiply);
btnDiv.addEventListener("click", nullInpUno);
btnDiv.addEventListener("click", nullInpDos);
btnDiv.addEventListener("click", division);