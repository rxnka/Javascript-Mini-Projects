var searchArr = [
    "Europe",
    "Asia",
    "Africa",
    "Australia / Oceania",
    "North America",
    "South America"
  ];
  searchArr = searchArr.sort();
  for (let i = 0; i < searchArr.length; i++) {
    var element = searchArr[i];
    document.getElementById(
      "allArray"
    ).innerHTML += `<p class = "paragraphSearch text-center shadow py-2 mb-4"> <a href="#">${element}</a></p>`;
  }
  function searchBox() {
    var inputVal, filter, p, a, txtValue;
    inputVal = document.getElementById("searchInp").value;
    filter = inputVal.toUpperCase();
    p = document.getElementsByClassName("paragraphSearch");
    for (let i = 0; i < p.length; i++) {
      a = p[i].getElementsByTagName("a")[0];
      txtValue = a.textContent; //We could have used innerText too
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        p[i].style.display = "";
      } else {
        p[i].style.display = "none";
      }
    }
  }