today = new Date();
var cmas = new Date(today.getFullYear(), 11, 25);
if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
var oneday = 1000 * 60 * 60 * 24;
var daysleft = Math.ceil((cmas.getTime() - today.getTime()) / oneday);
document.getElementById(
  "christmas"
).innerHTML = ` There are ${daysleft} days left until Christmas!`;
