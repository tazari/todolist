function addTask(){
    //FUNCTION: take input from box and add to list in first div
    var listItem = document.createElement("li");
    var entryBox = document.getElementById("toDoInput").value;
    
    if (entryBox == " "){
        alert("You must enter a value.");
    }
   
    else {
        listItem.style.visibility = "visible";
    
        var entryText = document.createTextNode(entryBox);
        listItem.appendChild(entryText);
        document.getElementById("listie").appendChild(listItem);
        
        document.getElementById("toDoInput").value = " ";
        
        // add a "Done" button to each list item in 1st div
        var doneButton = document.createElement("button");
          doneButton.className = "doneButton";
          listItem.appendChild(doneButton);
          
          //FUNCTION: move list item to second div when clicked
          doneButton.addEventListener("click", function(){
            document.getElementById("done").style.visibility = "hidden"; //re-hide bye-bye button
            document.getElementById("listie2").appendChild(listItem);
            listItem.removeChild(doneButton);
        
            // add a "Delete" button to each list item in 2nd div
            var deleteButton = document.createElement("button");
            deleteButton.className = "deleteButton";
            listItem.appendChild(deleteButton);
            
            // add a "Redo" button to each list item in 2nd div
            var redoButton = document.createElement("button");
            redoButton.className = "redoButton";
            listItem.appendChild(redoButton);
            
            //FUNCTION: delete list item in second div when Delete button is clicked 
            deleteButton.addEventListener("click", function(){
                document.getElementById("listie2").removeChild(listItem); 
                document.getElementById("done").style.visibility = "visible";
            });
            
            //FUNCTION: send list item in second div back to first div when Redo button is clicked 
            redoButton.addEventListener("click", function(){
                document.getElementById("listie2").removeChild(listItem);
                document.getElementById("listie").appendChild(listItem);
                listItem.removeChild(redoButton);
                listItem.removeChild(deleteButton);
                listItem.appendChild(doneButton);
                document.getElementById("done").style.visibility = "hidden"; //re-hide bye-bye button
            });
          });
          document.getElementById("done").style.visibility = "hidden"; //re-hide bye-bye button 
    }
}

//FUNCTION: celebrate finishing a task!
function celebrate(){
    alert("🎉🎉🎉🎉🎉🎉");
}

//FUNCTION: trigger Add button by pressing Enter
var inputField = document.getElementById("toDoInput"); //works when tested in JSBin, but not in Komodo or Chrome
inputField.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("add").click();
  }
});