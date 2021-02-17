function validateInput(Input){
    if(Input){
        return true;
    }else{
        return false;
    }
}

function addElementToList(){
    const newText = document.createElement("li");
    let userInput = document.getElementById("userInput").value;

    if(validateInput(userInput) == true){
        let newNode = document.createTextNode(userInput);
        newText.appendChild(newNode);
        document.getElementById("listArea").appendChild(newText);
    }else{
        alert("ERROR: INVALID INPUT!");
    }
}