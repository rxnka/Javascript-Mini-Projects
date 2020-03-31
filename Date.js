function date() {
  var d = new Date();
  var month = d.getMonth() + 1; // get's the month that has passed not the month we are right now
  var year = d.getFullYear();
  var day = d.getDate();
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }
  document.getElementById(
    "time"
  ).innerHTML = `Today's date: ${day}-${month}-${year} <br>`;

  const all = moment().format("DD-MM-YYYY");
  document.getElementById(
    "moment"
  ).innerHTML = `Today's date with moment.js: ${all} <br>`;
}
date();