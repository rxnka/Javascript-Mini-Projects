var nameRe = /^[a-zA-Z]+$/;
var emailRe = /\S+@\S+\.\S+/;
var phoneRe = /^\d{3}[-]\d{3}[-]\d{3,4}$/;

function firstname() {
  if (nameRe.test(document.getElementById("fname").value) == false) {
    document.getElementById("firtPara").innerHTML =
      "<p style='color: red;'>Only aplabetic characters</p>";
  } else {
    document.getElementById("firtPara").innerHTML =
      "<span style='color: green;'>Valid Input</span>";
  }
}
function lastname() {
  if (nameRe.test(document.getElementById("lname").value) == false) {
    document.getElementById("lastPara").innerHTML =
      "<p style='color: red;'>Only aplabetic characters</p>";
  } else {
    document.getElementById("lastPara").innerHTML =
      "<span style='color: green;'>Valid Input</span>";
  }
}
function emailFunc() {
  if (emailRe.test(document.getElementById("email").value) == false) {
    document.getElementById("emailPara").innerHTML =
      "<p style='color: red;'>Please includ a '@' and a '.'</p>";
  } else {
    document.getElementById("emailPara").innerHTML =
      "<span style='color: green;'>Valid Input</span>";
  }
}
function phoneN() {
  if (phoneRe.test(document.getElementById("phone").value) == false) {
    document.getElementById("phonePara").innerHTML =
      "<p style='color: red;'>Only number charaters and they should be seperated by '-'</p>";
  } else {
    document.getElementById("phonePara").innerHTML =
      "<span style='color: green;'>Valid Input</span>";
  }
}
var btn = document.getElementById("myBtn");
function validfirst() {
  if (document.getElementById("fname").value == "") {
    document.getElementById("firtPara").innerHTML =
      "<span style='color: red;'>Please enter your name</span>";
    return false;
  }
}
function validlast() {
  if (document.getElementById("lname").value == "") {
    document.getElementById("lastPara").innerHTML =
      "<span style='color: red;'>Please enter your surname</span>";
    return false;
  }
}
function validemail() {
  if (document.getElementById("email").value == "") {
    document.getElementById("emailPara").innerHTML =
      "<span style='color: red;'>Please enter your email address</span>";
    return false;
  }
}
function validphone() {
  if (document.getElementById("phone").value == "") {
    document.getElementById("phonePara").innerHTML =
      "<span style='color: red;'>Please enter your mobile number</span>";
    return false;
  }
}
function gendervalid() {
  if (
    document.form.gender[0].checked == false &&
    document.form.gender[1].checked == false
  ) {
    document.getElementById("gendPara").innerHTML =
      "<span style='color: red;'>Please select your Gender: Male or Female</span>";
  }
}
function radioGender() {
  if (
    document.form.gender[0].checked == true ||
    document.form.gender[1].checked == false
  ) {
    document.getElementById("gendPara").innerHTML =
      "<span style='color: red;'> </span>";
  } else if (
    document.form.gender[0].checked == false ||
    document.form.gender[1].checked == true
  ) {
    document.getElementById("gendPara").innerHTML =
      "<span style='color: red;'> </span>";
  }
}
btn.addEventListener("click", validfirst);
btn.addEventListener("click", validlast);
btn.addEventListener("click", validemail);
btn.addEventListener("click", validphone);
btn.addEventListener("click", gendervalid);