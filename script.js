import listElementClass from './thing-to-do.js';


const submitButton = document.getElementById("addButton");

submitButton.addEventListener("click", function(){
    let userInput = document.getElementById("userInput").value;
    let ListElementObject = new listElementClass(userInput);

    ListElementObject.addElementToList("asdsd");
    userInput = "";
});

const list = document.getElementById("listArea");

list.addEventListener("click", function(event){
    if(event.target.className == "deleteButton"){
        const li = event.target.parentElement;
        list.removeChild(li);
    }
});