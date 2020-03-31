function allLinks() {
    var linku = document.links;
    var all = "";
    for (let i = 0; i < linku.length; i++) {
      all += linku[i].href + " ";
    }
    console.log(all);
  }
  console.log(allLinks());
  var url = window.location;
  console.log(url);