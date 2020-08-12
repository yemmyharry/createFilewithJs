// const fs = require("fs")

// let files = fs.readFile("book.txt", function(err, data){
//     if(err) throw err;
//     console.log(data.toString())
// })
// console.log(files)



	// import { saveAs } from 'file-saver';
    // FileSaver saveAs(Blob/File/Url, optional DOMString filename, optional Object { autoBom })
  
    document.querySelector("#bub").onclick = function(){
  
      var userInput = document.getElementById("myText").value;
      var nomInput = document.getElementById("nom")
      .value
        var blob = new Blob([userInput], { type: "text/plain;charset=utf-8" });
        saveAs(blob, `${nomInput}`);
   }
   
