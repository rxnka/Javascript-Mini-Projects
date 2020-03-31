function reverseParagraph() {
    var para = document.getElementById("reverse").value;
    document.getElementById("revPara1").innerHTML = `First reverse form : ${para
      .split("")
      .reverse()
      .join("")}`;
    document.getElementById("revPara2").innerHTML = `Second reverse form : ${para
      .split(" ")
      .map(para =>
        para
          .split("")
          .reverse()
          .join("")
      )
      .join(" ")}`;
  }