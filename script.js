import listElementClass from './thing-to-do.js';


const submitButton = document.getElementById("addButton");

submitButton.addEventListener("click", function(){
    let userInput = document.getElementById("userInput").value;
    let ListElementObject = new listElementClass(userInput);

    ListElementObject.addElementToList("listArea");
    userInput = "";
});