function addtodo() {
    var creatpara = document.createElement("p");
    var taska = document.getElementById("todoTask").value;
    var node = document.createTextNode(taska);
    var checkinp = document.createElement("input");
    checkinp.type = "checkbox";
    checkinp.className = "complete";
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u2715");
    span.className = "close";
    span.appendChild(txt);
  
    creatpara.appendChild(checkinp);
    creatpara.appendChild(node);
    creatpara.appendChild(span);
  
    if (taska == "") {
      document.getElementById("taskPara").innerHTML =
        '<p style="color:red;">You must write something!</p>';
    } else {
      document.getElementById("taskCheck").appendChild(creatpara);
    }
  
    document.getElementById("todoTask").value = " ";
  
    var close = document.getElementsByClassName("close");
    for (let i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }
    var complete = document.getElementsByClassName("complete");
    for (let i = 0; i < complete.length; i++) {
      complete[i].onclick = function() {
        var div = this.parentElement;
        complete[i].disabled = true;
        document.getElementById("completetasks").appendChild(div);
      };
    }
  }