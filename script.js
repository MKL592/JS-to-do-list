import listElementClass from './thing-to-do.js';


const submitButton = document.getElementById("addButton");

submitButton.addEventListener("click", function(){
    const userInput = document.getElementById("userInput");
    let ListElementObject = new listElementClass(userInput.value);

    ListElementObject.addElementToList("listArea");
    userInput.value = "";
});