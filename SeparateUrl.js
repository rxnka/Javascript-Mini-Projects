function url() {
    var link = "https://mail.google.com/mail/u/0";
    var url = link.split("/");
    document.getElementById("complete").innerHTML = `From this ${link} <br> `;
    document.getElementById("mail").innerHTML = `To this ${url} <br> `;
  }
  url();