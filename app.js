
    document.querySelector("#bub").onclick = function(){
  
      var userInput = document.getElementById("myText").value;
      var nomInput = document.getElementById("nom")
      .value
        var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `${nomInput}`);
   }
   
